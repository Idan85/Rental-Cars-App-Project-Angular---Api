import { Component, Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

import { MapService } from './map.service';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy  {

  @Input () location: string;

  @Input () locationSubject: Subject<any>;

  // tslint:disable-next-line:no-inferrable-types
  isPositionError: boolean = false;

  lat: number;

  lng: number;

  constructor (private mapService: MapService,
               private ref: ChangeDetectorRef ) { }

  ngOnInit() {

  if ( this.locationSubject ) {

    this.locationSubject.subscribe (( location: string ) => {

      this.getLocation ( location );
    });
  }
  }

  ngOnDestroy () {

    if ( this.locationSubject ) {

      this.locationSubject.unsubscribe ();
    }
  }

  getLocation ( location ) {

    this.mapService.getGeoLocation (this.location).subscribe (

      ( coordinates ) => {

        this.lat = coordinates.lat;

        this.lng = coordinates.lng;

        this.ref.detectChanges();

      }, () => {

        this.isPositionError = true;
      });
}

  mapReadyHandler () {

   this.getLocation ( this.location );
  }

}