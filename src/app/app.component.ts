import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'users-app';

  snippets = "Template<script>alert('Script inejcted')</script>Syntax"

  dangerUrl = 'javascript:alert("Hello Angular!")'
  safeUrl : any;

  constructor(
    public dataService: DataService,
    public authService : AuthService,
    private sanitizer : DomSanitizer) {}

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerUrl);
    firebase.initializeApp({
      apiKey: 'AIzaSyCf-jTpnneAT-UKcp9pCGpePNpUkfPUanc',
      authDomain: 'kcc-sbi.firebaseapp.com'
    });
  }

  onIncrease() {
    this.dataService.counter++;
  }
}
