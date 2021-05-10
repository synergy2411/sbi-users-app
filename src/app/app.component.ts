import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'users-app';

  constructor(
    public dataService: DataService,
    public authService : AuthService) {}

  ngOnInit() {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyCf-jTpnneAT-UKcp9pCGpePNpUkfPUanc',
      authDomain: 'kcc-sbi.firebaseapp.com'
    });
  }

  onIncrease() {
    this.dataService.counter++;
  }
}
