import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ngx-pipes';

import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageRentalComponent } from './manage-rental/manage-rental.component';
import { ManageComponent } from './manage.component';

import { BookingService } from './../booking/shared/booking.service';
import { RentalService } from './../rental/shared/rental.service';
import { AuthGuard } from './../auth/shared/auth.guard';
import { FormatDatePipe } from '../common/pipes/format-date.pipe';



const routes: Routes = [

{
    path: 'manage',
    component: ManageComponent,
    children: [

    { path: 'rentals', component: ManageRentalComponent, canActivate: [ AuthGuard ] },

    { path: 'bookings', component: ManageBookingComponent, canActivate: [ AuthGuard ] },

    ]
}
];

@NgModule ({

    declarations: [

        ManageBookingComponent,
        ManageRentalComponent,
        ManageComponent,
        FormatDatePipe,
        ManageRentalBookingComponent

    ],

    imports: [

        RouterModule.forChild(routes),
        CommonModule,
        NgPipesModule

    ],

    providers: [

        RentalService,
        BookingService

    ]
})

export class ManageModule {}
