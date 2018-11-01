import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.css']
})
export class FilterResultsComponent implements OnInit {

  public daterange: any = {};

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  public options: any = {

    locale: { format: 'YYYY-MM-DD' },

    alwaysShowCalendars: false,

    opens: 'left'
  };

  public selectedDate(value: any, datePicker?: any) {

    console.log (value);

    datePicker.start = value.start;

    datePicker.end = value.end;

    this.daterange.start = value.start;

    this.daterange.end = value.end;

    this.daterange.label = value.label;
  }

}
