import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule, UcWordsPipe } from 'ngx-pipes';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalUpdateComponent } from './rental-update/rental-update.component';

import { SearchDatesComponent } from './search/search-dates/search-dates.component';
import { SearchComponent } from './search/search.component';
import { RentalGuard } from './shared/rental.guard';
import { UpeercasePipe } from '../common/pipes/uppercase.pipe';
import { AuthGuard } from './../auth/shared/auth.guard';
import { EditableModule } from './../common/components/editable/editable.module';
import { FilterResultsComponent } from './rental-list/filter-results/filter-results.component';

import { HelperService } from '../common/service/helper.service';
import { BookingService } from './../booking/shared/booking.service';
import { ImageUploadModule } from './../common/components/image-upload/image-upload.module';
import { PaymentModule } from './../payment/payment.module';


const routes: Routes = [
    { path: 'rentals',
      component: RentalComponent,
      children: [
          { path: '', component: SearchComponent },
          { path: 'findings', component: RentalListComponent},
          { path: 'new', component: RentalCreateComponent, canActivate: [ AuthGuard ]},
          { path: ':rentalId/edit', component: RentalUpdateComponent, canActivate: [ AuthGuard, RentalGuard ]},
          { path: ':rentalId', component: RentalDetailComponent },
          { path: ':category/cars', component: RentalSearchComponent}

      ]
    },
  ];

@NgModule ({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent,
        UpeercasePipe,
        RentalDetailBookingComponent,
        SearchComponent,
        FilterResultsComponent,
        SearchDatesComponent,
        RentalSearchComponent,
        RentalCreateComponent,
        RentalUpdateComponent,
    ],

    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        MapModule,
        Daterangepicker,
        NgMultiSelectDropDownModule,
        NgbModule,
        FormsModule,
        EditableModule,
        ImageUploadModule,
        PaymentModule
    ],

    providers: [
                RentalService,
                HelperService,
                BookingService,
                UcWordsPipe,
                RentalGuard]
})

export class RentalModule {

}
