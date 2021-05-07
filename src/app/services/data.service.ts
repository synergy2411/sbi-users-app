import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  constructor(private httpClient : HttpClient){}

  counter : number = 0;

  public getUserData(){
    return USER_DATA
  }

  public getUserDataFromServer(){
    this.httpClient.get("./assets/data/userdata.json")
      .subscribe((response)=>{
        console.log("[RESPONSE]", response);
      })
  }

}
