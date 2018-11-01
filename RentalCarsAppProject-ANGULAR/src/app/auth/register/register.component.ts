import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { AuthService } from '../_services/auth.service';

import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Output() cancelRegister = new EventEmitter();

  model: any = {};

  formData: any = {};

  errors: any [] = [];

  constructor(private authService: AuthService,
              private router: Router,
              private http: HttpClient,
              private alertify: AlertifyService) { }

  ngOnInit() {

    this.formData = {};
  }

  register() {

    this.authService.register(this.model).subscribe(

        () => {

        this.router.navigate(['/login', {registered: 'success'}]);

        this.alertify.success('registration Successful');

      },

      (errorResponse) => {

        this.alertify.error(errorResponse);

        this.errors = errorResponse.error.errors;

      });
  }

  // register() {

  //   this.auth.register(this.formData).subscribe(

  //     () => {

  //        this.router.navigate(['/login', {registered: 'success'}]);

  //     },

  //     (errorResponse) => {

  //       this.errors = errorResponse.error.errors;

  //     });
  // }

  // cancel() {

  //   this.cancelRegister.emit(false);

  //   console.log('cancelled');
  // }
}
