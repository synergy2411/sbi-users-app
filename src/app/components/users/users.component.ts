import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`],
  // providers : [DataService]
})
export class UsersComponent implements OnInit{

  showComp : boolean = true;

  users : User[];

  constructor(public dataService : DataService){}

  onDecrease(){
    this.dataService.counter--;
  }

  ngOnInit(){
    // this.users = USER_DATA;
    // this.users = this.dataService.getUserData();
    this.dataService.getUserDataFromServer()
      .subscribe(
        (data : User[]) =>{
          this.users = data;
        }
        );
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`);
  }
}
