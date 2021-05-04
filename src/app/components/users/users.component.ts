import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent{
  user : User = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1964"),
    company : "Microsoft",
    income : 50000,
    image : "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
    votes : 220
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`);
  }
}
