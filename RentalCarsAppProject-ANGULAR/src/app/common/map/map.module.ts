import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service';

import { MapComponent } from './map.component';

import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent
  ],

  exports: [
    MapComponent
  ],

  imports: [
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDt5ybKrb1qManvRBleBAOBcmHsyq1NXqs'
      }),

      CommonModule
  ],

  providers: [
    MapService,
    CamelizePipe
  ],
})

export class MapModule { }
