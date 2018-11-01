import { Component, OnInit, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { Rental } from './../../shared/rental.model';

import { Booking } from './../../../booking/shared/booking.model';

import { HelperService } from '../../../common/service/helper.service';

import { BookingService } from './../../../booking/shared/booking.service';

import { AuthService } from './../../../auth/shared/auth.service';


import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';

import { ToastrService } from 'ngx-toastr';

import { DaterangePickerComponent } from 'ng2-daterangepicker';

import * as moment from 'moment';

@Component({

  encapsulation: ViewEncapsulation.None,

  selector: 'app-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.css'],

})

export class RentalDetailBookingComponent implements OnInit {

  @Input () rental: Rental;

  @ViewChild ( DaterangePickerComponent )

  private picker: DaterangePickerComponent;

  // @ViewChild ( 'bookingNoteTitle' )

  // private somePtag: ElementRef;

  newBooking: Booking;

  bsModalRef: BsModalRef;

  daterange: any = {};

  bookedOutDates: any [] = [];

  errors: any [] = [];

  options: any = {

    locale: { format: Booking.DATE_FORMAT },

    alwaysShowCalendars: false,

    opens: 'left',

    autoUpdateInput: false,

    isInvalidDate: this.checkForInvalidDates.bind ( this )
  };

  constructor( private helper: HelperService,
               private modalService: BsModalService,
               private bookingService: BookingService,
               private toastr: ToastrService,
               public auth: AuthService ) {
  }

  private addNewBookedDates ( bookingData: any ) {

    const dateRange = this.helper.getBookingRangeOfDates ( bookingData.startAt, bookingData.endAt );

    this.bookedOutDates.push ( ...dateRange );
  }

  private resetDatePicker () {

    this.picker.datePicker.setStartDate ( moment () );

    this.picker.datePicker.setEndDate ( moment () );

    this.picker.datePicker.element.val ( '' );
  }

 openModal (template: TemplateRef<any>) {

  this.errors = [];

  this.bsModalRef = this.modalService.show( template );
  }

  onPaymentConfirmed ( paymentToken: any ) {

    this.newBooking.paymentToken = paymentToken;
  }

  createBooking () {

    this.newBooking.rental = this.rental;

    this.bookingService.createBooking ( this.newBooking ).subscribe (

      ( bookingData: any ) => {

      this.addNewBookedDates ( bookingData );

      this.newBooking = new Booking ();

      this.bsModalRef.hide();

      this.resetDatePicker();

      this.toastr.success ( 'Booking has been succesfuly created, check your booking detail in manage section', 'Success!');

      },
      ( errorResponse: any ) => {

        this.errors = errorResponse.error.errors;

      });
  }

  ngOnInit() {

    this.newBooking = new Booking();

    this.getBookedOutDates();

    // tslint:disable-next-line:no-unused-expression
    // this.somePtag.nativeElement.style.color = 'red';
  }

  private checkForInvalidDates ( date ) {

    return this.bookedOutDates.includes ( this.helper.formatBookingDate ( date )) || date.diff ( moment (), 'days' ) < 0;

  }

    private getBookedOutDates () {

      const bookings: Booking [] = this.rental.bookings;

    if ( bookings && bookings.length > 0 ) {

         bookings.forEach (( booking: Booking ) => {

        const dateRange = this.helper.getBookingRangeOfDates ( booking.startAt, booking.endAt );

        this.bookedOutDates.push ( ...dateRange );

      });
    }
  }

  // openConfirmModal ( content ) {

  //   this.modalService.open ( content );
  // }


  selectedDate(value: any, datePicker?: any) {

    this.options.autoUpdateInput = true;

    this.newBooking.startAt = this.helper.formatBookingDate ( value.start );

    this.newBooking.endAt = this.helper.formatBookingDate ( value.end );

    this.newBooking.days = -(value.start.diff ( value.end, 'days' ));

    this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }
  }

