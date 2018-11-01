import { Component, OnInit } from '@angular/core';

import { Rental } from './../shared/rental.model';

import { RentalService } from './../shared/rental.service';

import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental;

  errors: any [] = [];

  constructor ( private rentalService: RentalService,
                private router: Router ) {

  }

  handleImageChange() {

    // console.log ('work');

    this.newRental.image = 'https://cdn2.rcstatic.com/images/car_images/new_images/fiat/500_lrg.jpg';
  }

  ngOnInit() {

    this.newRental = new Rental ();
  }

  handleImageUpload ( imageUrl: string ) {

    this.newRental.image = imageUrl;
  }

  handleImageError () {

    this.newRental.image = '';
  }

  createRental () {

    // console.log (this.newRental);
    this.rentalService.createRental ( this.newRental ).subscribe (

      ( rental: Rental) => {

        this.router.navigate ([ `/rentals/${rental._id}` ]);

    },

      ( errorResponse: HttpErrorResponse ) => {

        this.errors = errorResponse.error.errors;

      });
  }

}
