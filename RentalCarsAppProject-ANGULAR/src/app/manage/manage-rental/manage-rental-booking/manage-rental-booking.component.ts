import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';

import { Booking } from '../../../booking/shared/booking.model';

@Component({
  selector: 'app-manage-rental-booking',
  templateUrl: './manage-rental-booking.component.html',
  styleUrls: ['./manage-rental-booking.component.css']
})
export class ManageRentalBookingComponent implements OnInit {

  @Input () bookings: Booking [];

  bsModalRef: BsModalRef;

  constructor ( public modalService: BsModalService) { }


  ngOnInit() {
  }

  openModal (bookingModal: TemplateRef<any>) {


    this.bsModalRef = this.modalService.show( bookingModal );
    }

}
