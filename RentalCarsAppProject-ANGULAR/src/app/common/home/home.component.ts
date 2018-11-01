import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export class HomeComponent {


export class HomeComponent implements OnInit {

    loadedFeature = 'home';

    values: any;

    registerMode = false;

  constructor ( private http: HttpClient ) { }

  ngOnInit() {

    this.getValues();
  }

onNavigate (feature: string) {

    this.loadedFeature = feature;
}

getValues() {

  this.http.get('http://localhost:5000/api/values').subscribe(response => {

  this.values = response;

}, error => {

  console.log(error);

   });
  }

  registerToggle() {

  this.registerMode = true;
}

  cancelRegisterMode(registerMode: boolean) {

    this.registerMode = registerMode;
  }
}

