import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TestService{
  private user = {email : "test@test.com", age : 32};
  getUser(){
    return this.user;
  }

  getFruits(){
    return new Observable(observer => {
      observer.next("Apple");
    })
  }

  getBooks(){
    return new Promise((resolve, reject) => {
      resolve("You can win");
    })
  }
}
