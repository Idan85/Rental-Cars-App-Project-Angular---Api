import { Component, OnInit, Input  } from '@angular/core';

import { Rental } from '../shared/rental.model';

import { Router, ActivatedRoute } from '@angular/router';

import { RentalService } from '../shared/rental.service';

import { HelperService } from '../../common/service/helper.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private newRental: any = '';

  @Input() rental: any;

  // rental: Rental [] = [];

  errors: any [] = [];

  isShow = false;

  // newRental: Rental;

  dropdownList = [];

  selectedItems = [];


  dropdownList1 = [];

  selectedItems1 = [];


  dropdownList2 = [];

  selectedItems2 = [];


  dropdownList3 = [];

  selectedItems3 = [];


  dropdownSettings = {};

  constructor ( public route: ActivatedRoute,
                public rentalService: RentalService,
                public router: Router,
                private helper: HelperService,
                private HttpClient: HttpClient ) {

  }

ngOnInit() {

this.newRental = new Rental ();

this.newRental.checkbox = false;

this.dropdownList = [
                    { item_id: 1, item_text: 'Automatic Gearbox' },
                    { item_id: 2, item_text: 'Manual Gearbox' },
                    ],

this.selectedItems = [
                     { item_id: 1, item_text: 'Automatic Gearbox' },
                     { item_id: 2, item_text: 'Manual Gearbox' }
                     ],

this.dropdownList1 = [
                    { item_id: 1, item_text: '2012' },
                    { item_id: 2, item_text: '2013' },
                    { item_id: 3, item_text: '2014' },
                    { item_id: 4, item_text: '2015' },
                    { item_id: 5, item_text: '2016' },
                    { item_id: 6, item_text: '2017' }
                     ],

this.selectedItems1 = [
                    { item_id: 1, item_text: '2012' },
                    { item_id: 2, item_text: '2013' },
                    { item_id: 3, item_text: '2014' },
                    { item_id: 4, item_text: '2015' },
                    { item_id: 5, item_text: '2016' },
                    { item_id: 6, item_text: '2017' }
                    ],

this.dropdownList2 = [
                    { item_id: 1, item_text: 'Citroen' },
                    { item_id: 2, item_text: 'Hyundai' },
                    { item_id: 3, item_text: 'Kia' },
                    { item_id: 4, item_text: 'Mazda' },
                    { item_id: 5, item_text: 'Mitsubishi' },
                    { item_id: 6, item_text: 'Nissan' },
                    { item_id: 7, item_text: 'Opel' },
                    { item_id: 8, item_text: 'Subaru' },
                    { item_id: 9, item_text: 'Suzuki' }
                    ],

this.selectedItems2 = [
                    { item_id: 1, item_text: 'Citroen' },
                    { item_id: 2, item_text: 'Hyundai' },
                    { item_id: 3, item_text: 'Kia' },
                    { item_id: 4, item_text: 'Mazda' },
                    { item_id: 5, item_text: 'Mitsubishi' },
                    { item_id: 6, item_text: 'Nissan' },
                    { item_id: 7, item_text: 'Opel' },
                    { item_id: 8, item_text: 'Subaru' },
                    { item_id: 9, item_text: 'Suzuki' }
                      ],

this.dropdownList3 = [
                    { item_id: 1, item_text: 'Citroen Berlingo' },
                    { item_id: 2, item_text: 'Hyundai i25' },
                    { item_id: 3, item_text: 'Kia Picanto' },
                    { item_id: 4, item_text: 'Mazda 5' },
                    { item_id: 5, item_text: 'Mazda 6' },
                    { item_id: 6, item_text: 'Mitsubishi Outlander' },
                    { item_id: 7, item_text: 'Nissan Micra' },
                    { item_id: 8, item_text: 'Mokka' },
                    { item_id: 9, item_text: 'Subaru Impreza' },
                    { item_id: 10, item_text: 'Suzuki Alto' }
                     ],

this.selectedItems3 = [
                      { item_id: 1, item_text: 'Citroen Berlingo' },
                      { item_id: 2, item_text: 'Hyundai i25' },
                      { item_id: 3, item_text: 'Kia Picanto' },
                      { item_id: 4, item_text: 'Mazda 5' },
                      { item_id: 5, item_text: 'Mazda 6' },
                      { item_id: 6, item_text: 'Mitsubishi Outlander' },
                      { item_id: 7, item_text: 'Nissan Micra' },
                      { item_id: 8, item_text: 'Mokka' },
                      { item_id: 9, item_text: 'Subaru Impreza' },
                      { item_id: 10, item_text: 'Suzuki Alto' }
                      ],

this.dropdownSettings = {
                            singleSelection: false,
                            idField: 'item_id',
                            textField: 'item_text',
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            itemsShowLimit: 5,
                            allowSearchFilter: true

                          };

// this.route.params.subscribe ( (params) => {

//      this.getRental( params ['newRental'] );
//   });

this.route.params.subscribe(

(params) => {

this.getRental(params['rental']);
   });
}


getRental ( rental: string ) {

        this.rentalService.getRentalById ( rental ) .subscribe(

        ( rental: Rental ) => {

          this.rental = rental;
       });
     }

// goToSearch ( rental: string ) {

//       this.router.navigateByUrl ( `/findings${rentalId}` );
//   }


onItemSelect (item: any ) {
                           console.log(item);
}

onSelectAll (items: any) {
                          console.log(items);
}

createSearch () {

  console.log ( this.newRental );

}
}

export class AppSearch {}


// ngOnInit() {

//   this.route.params.subscribe(

//     (params) => {

//      this.getRental(params['rentalId']);
//     });
// }

// transformLocation ( location: string ): string {

//   return this.upperPipe.transform ( location );
// }

// getRental ( rentalId: any ) {

//   this.RentalService.getRentalById ( rentalId ).subscribe (

//     ( rental: Rental ) => {

//       this.rental = rental;
//     });
// }

// updateRental ( rentalId: any, rentalData: any ) {

//   this.RentalService.updateRental ( rentalId, rentalData ).subscribe (

//     ( updateRental: Rental ) => {

//     this.rental = updateRental;

//     if ( rentalData.pickup || rentalData.dropoff ) {

//     this.locationSubject.next( this.rental.pickup + this.rental.dropoff );
//     }
//   },

//   ( errorResponse: HttpErrorResponse ) => {

//     this.toastr.error ( errorResponse.error.errors[0].detail, 'Error');

//     this.getRental ( rentalId );

//   });





