import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.isExclamationMarkPresent,
  ]);
  registerForm: FormGroup;

  private isExclamationMarkPresent(control: AbstractControl) {
    if (control.value && control) {
      const hasExclamation = control.value.indexOf('!') >= 0;
      return hasExclamation ? null : { hasExclamation: true };
    }
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      uname: this.username,
      pwd: this.password,
    });
  }

  onRegister() {
    console.log(this.registerForm);
  }

  onReset() {
    this.registerForm.reset();
  }

  ngOnInit(): void {}
}
