import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from "../model/user";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn : 'root'
})
export class DataService{

  constructor(
    private httpClient : HttpClient,
    private authService : AuthService  ){}

  counter : number = 0;

  public getUserData(){
    return USER_DATA
  }

  public getUserDataFromServer(){
    // this.httpClient.get("./assets/data/userdata.json")
    // return this.httpClient.get<User[]>(
    //   "https://kcc-sbi-default-rtdb.firebaseio.com/userdata.json?auth="+this.authService.getToken()
    //   )
    // return this.httpClient.get<User[]>(
    //   "https://kcc-sbi-default-rtdb.firebaseio.com/userdata.json", {
    //     params : new HttpParams().set("auth", this.authService.getToken())
    //   }
    //   )
    return this.httpClient.get<User[]>(
      "https://kcc-sbi-default-rtdb.firebaseio.com/userdata.json"
      )
  }

}
