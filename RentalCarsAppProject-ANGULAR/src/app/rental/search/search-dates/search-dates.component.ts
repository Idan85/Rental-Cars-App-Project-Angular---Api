import { Component, OnInit, Input } from '@angular/core';

import { Booking } from './../../../booking/shared/booking.model';

@Component({
  selector: 'app-rental-dates',
  templateUrl: './search-dates.component.html',
  styleUrls: ['./search-dates.component.css']
})
export class SearchDatesComponent implements OnInit {

  @Input() rental: any;

  @Input() bookings: Booking[];


  daterange: any = {};

  options: any = {

    locale: { format: 'YYYY-MM-DD' },

    alwaysShowCalendars: false,

    opens: 'left'
  };

  constructor() { }

  ngOnInit() {

    this.getBookedOutDates();
  }

  private getBookedOutDates () {

    if ( this.bookings && this.bookings.length > 0 ) {

      this.bookings.forEach (( booking: Booking ) => {

        console.log ( booking );
      });
    }
  }


  selectedDate(value: any, datePicker?: any) {

    console.log (value);

    datePicker.start = value.start;

    datePicker.end = value.end;


    this.daterange.start = value.start;

    this.daterange.end = value.end;

    this.daterange.label = value.label;
}

}
