import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userEmail = loginForm.form.value.userEmail;
      const password = loginForm.form.value.passwordVar;
      alert('Welcome..!!');
      console.log(userEmail, password);
    } else {
      this.errorMessage = 'Please enter a user email and password.';
    }
  }

}
