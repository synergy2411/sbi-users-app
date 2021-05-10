import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // randomToken : string = null;
  private token : string = null;

  constructor(private router : Router) { }

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
        // console.log("[LOGIN SUCCESS]", response);
        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            // console.log("[TOKEN]", token);
            this.token = token;
            this.router.navigate(['/users']);
          })
      }).catch(err => console.log(err))


    // const user = JSON.parse(localStorage.getItem("user"));
    // const {email : userEmail, password : userPwd} = user;
    // if(email === userEmail && password === userPwd){
    //   this.randomToken = Date.now() + " - "+Math.round(Math.random()*1000).toString();
    //   console.log(this.randomToken);
    //   return alert("SUCCESS");
    // }else{
    //   alert('NOT AUTHORISED')
    // }
  }

  isAuthenticated() : boolean{
    return this.token != null;
  }

  getToken() : string{
    return this.token;
  }

  logout(){

    // localStorage.removeItem("users");

    firebase.default.auth().signOut()
      .then(() => {
        this.token = null;
        this.router.navigate(['/login']);
      })
      .catch(err => console.log(err))
  }

}
