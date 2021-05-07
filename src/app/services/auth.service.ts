import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onRegister(email : string, password : string){
    firebase.default.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[USER CREATED]", response);
      }).catch(err => console.log(err));
  }

}
