import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";

  onLogin(f : NgForm){
    const {username, password} = f.value;
    this.authService.onLogin(username, password);
  }

  onReset(f : NgForm){
    f.reset();
  }

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

}
