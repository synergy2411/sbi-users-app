import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin(f : NgForm){
    console.log(f);
  }

  onReset(f : NgForm){
    f.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
