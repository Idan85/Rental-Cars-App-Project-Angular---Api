import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RentalService } from './../shared/rental.service';
import { Rental } from '../shared/rental.model';

import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UcWordsPipe } from 'ngx-pipes';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {

  rental: Rental;

  locationSubject: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              private toastr: ToastrService,
              private upperPipe: UcWordsPipe ) {

              this.transformLocation = this.transformLocation.bind ( this );
               }

  ngOnInit() {

    this.route.params.subscribe(

      (params) => {

       this.getRental(params['rentalId']);
      });
  }

  transformLocation ( location: string ): string {

    return this.upperPipe.transform ( location );
  }

  getRental ( rentalId: any ) {

    this.rentalService.getRentalById ( rentalId ).subscribe (

      ( rental: Rental ) => {

        this.rental = rental;
      });
  }

  updateRental ( rentalId: any, rentalData: any ) {

    this.rentalService.updateRental ( rentalId, rentalData ).subscribe (

      ( updateRental: Rental ) => {

      this.rental = updateRental;

      if ( rentalData.pickup || rentalData.dropoff ) {

      this.locationSubject.next( this.rental.pickup + this.rental.dropoff );
      }
    },

    ( errorResponse: HttpErrorResponse ) => {

      this.toastr.error ( errorResponse.error.errors[0].detail, 'Error');

      this.getRental ( rentalId );

    });
  }
}
