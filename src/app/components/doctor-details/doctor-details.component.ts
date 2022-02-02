import { Router } from '@angular/router';
import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  docDetails:any;
  selectedTime:any = '';
  constructor(private userService : FetchService,
      private router:Router) { }

  ngOnInit(): void {
    if(this.userService.doctorDetails){
      this.docDetails = this.userService.doctorDetails
      console.log(this.docDetails)
    }
  }

  onSave(){
    this.userService.selectedTime = this.selectedTime;
    this.router.navigate(['appointment'])
  }
}
