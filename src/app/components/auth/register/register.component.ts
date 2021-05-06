import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  registerForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      uname : this.username,
      pwd : this.password
    })
  }

  onRegister(){
    console.log(this.registerForm);
  }

  onReset(){
    this.registerForm.reset();
  }

  ngOnInit(): void {
  }

}
