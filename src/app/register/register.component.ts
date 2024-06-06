import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  loginForm: NgForm;
  loggedIn:boolean = false;

  constructor(private route: Router){ }

  LogIn(){
    this.loggedIn = true;
    this.route.navigate(['/Home'])
  }

}
