import { FetchService } from './../fetch.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private fb:FormBuilder,
              private router :Router,
              private userService: FetchService){ }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.signupForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      phone:['', Validators.required],
      email:['', Validators.email],
      password:['',Validators.required]
    })
  }
  signup(){
    if(this.signupForm.valid){
      this.userService.signupDetails = this.signupForm.value;
      this.router.navigate(['doctorDetails'])
    }
    
  }

}
