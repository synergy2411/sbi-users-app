import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onRegister(email : string, password : string){

    // localStorage.setItem("user", JSON.stringify({email, password}));

    firebase.default.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[USER CREATED]", response);
      }).catch(err => console.log(err));
  }

  onLogin(email : string, password : string){

    firebase.default.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[LOGIN SUCCESS]", response);
      }).catch(err => console.log(err))


    // const user = JSON.parse(localStorage.getItem("user"));
    // const {email : userEmail, password : userPwd} = user;
    // if(email === userEmail && password === userPwd){
    //   return alert("SUCCESS");
    // }else{
    //   alert('NOT AUTHORISED')
    // }
  }

}
