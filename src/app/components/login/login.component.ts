import { FetchService } from './../fetch.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private fb:FormBuilder,
    private router:Router,
    private userService:FetchService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      if(this.userService.signupDetails.email === this.loginForm.value.email && this.userService.signupDetails.password === this.loginForm.value.password){
        this.router.navigate(['appointment']);
      }
    }
  }
}
