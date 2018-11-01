import { Component, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './../../auth/_services/auth.service';

import { AlertifyService } from './../../auth/_services/alertify.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })

  export class HeaderComponent {

    constructor ( public authService: AuthService,
                  private router: Router,
                  private alertify: AlertifyService ) {}

    logout () {

      localStorage.removeItem('token');

      this.alertify.message('logged out');

      // this.authService.logout();

      this.router.navigate ([ '/login' ]);
    }

    loggedIn() {

      return this.authService.loggedIn();

      // const token = localStorage.getItem('token');

      // return !!token;
     }

    search ( category: string ) {

      category ? this.router.navigate ([ `/rentals/${category}/cars`]) : this.router.navigate ([ '/rentals' ]);
    }

    @Output() featureSelected = new EventEmitter<string>();

    onSelect (feature: string) {

      this.featureSelected.emit(feature);
    }

  }


