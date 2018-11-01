import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { ManagementComponent } from './management/management.component';

import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';
import { ManageModule } from './manage/manage.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/_services/auth.service';
import { AlertifyService } from './auth/_services/alertify.service';
import { AuthGuard } from './auth/_guards/auth.guard';

 const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/rentals', pathMatch: 'full' },
  {path: 'management', component: ManagementComponent },
  {path: '', redirectTo: '/rentals/findings', pathMatch: 'full' },

 /*  {path: 'rental', component: RentalComponent }, */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ManagementComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    AuthModule,
    FormsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ManageModule,
    UserModule,

  ],
  providers: [

    AuthService,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent],

  // exports: [

  //   AuthGuard
  // ]
})
export class AppModule { }
