import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../_services/auth.service';

import { AlertifyService } from './../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  loginForm: FormGroup;

  errors: any [] = [];

  notifyMessage: string = '';

  constructor (private fb: FormBuilder,
               private authService: AuthService,
               private router: Router,
               private route: ActivatedRoute,
               private alertify: AlertifyService) { }

  ngOnInit() {

    this.initForm();

    this.route.params.subscribe (( params ) => {

      if ( params [ 'registered' ] === 'success') {
        this.notifyMessage = 'You have been succesfuly registered, You can login now!';
      }
    });
  }

  initForm() {

    this.loginForm = this.fb.group ({

      // email: ['', [Validators.required,
      //              Validators.pattern ('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],

      password: ['', Validators.required],

      username: ['', Validators.required],
    });
  }

  isInvalidInput ( fieldName ): boolean {

    return this.loginForm.controls[fieldName].invalid &&
          (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  isRequired ( fieldName ): boolean {

    return this.loginForm.controls[fieldName].errors.required;
 }

 login () {

  this.authService.login(this.model).subscribe (

    ( next ) => {

      this.router.navigate (['/rentals']);

      this.alertify.success('Logged In Successfully');
    },

    ( errorResponse ) => {

      this.alertify.error(errorResponse);

      this.errors = errorResponse.error.errors;

    });
 }


}
