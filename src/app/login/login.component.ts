import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: NgForm;
  loggedIn:boolean = false;

  constructor(private route: Router){ }

  LogIn(){
    this.loggedIn = true;
    this.route.navigate(['/Home'])
  }

}
