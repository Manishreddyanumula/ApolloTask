import { Router } from '@angular/router';
import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  docDetails:any;
  slotTime:any;
  userDetails:any;
  constructor(private userService : FetchService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.userService.signupDetails){
      this.userDetails = this.userService.signupDetails;
    }
    if(this.userService.selectedTime){
      this.slotTime = this.userService.selectedTime
    }
    if(this.userService.doctorDetails){
      this.docDetails = this.userService.doctorDetails;
    }
  }

  toLogin(){
    this.router.navigate(['login'])
  }
}
