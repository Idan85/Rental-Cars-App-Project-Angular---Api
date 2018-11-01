import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  loadedFeature = 'management';

  constructor(  private router: Router ) { }

  ngOnInit() {
  }

  onNavigate (feature: string) {

    this.loadedFeature = feature;

}
}
