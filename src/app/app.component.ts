import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import * as CryptoJS from 'crypto-js';

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
    const encryted = this.encryptData({email : "test@test.com", age : 32});
    console.log("[ENCRYPTED]",encryted);
    const decryptedData = this.decryptData(encryted);
    console.log("[DECRYPTED]", decryptedData);

  }

  onIncrease() {
    this.dataService.counter++;
  }

  encryptData(data){
    const encryptedData =
      CryptoJS.AES.encrypt(JSON.stringify(data), "MY_SECRET_KEY").toString();
    return encryptedData;
  }

  decryptData(data){
    const bytes = CryptoJS.AES.decrypt(data, "MY_SECRET_KEY");
    if(bytes.toString()){
      const stringData = bytes.toString(CryptoJS.enc.Utf8)
      return JSON.parse(stringData);
    }
    return data;
  }

}
