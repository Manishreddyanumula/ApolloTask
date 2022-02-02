import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  appointmentDetails: any;
  constructor(private router: Router,
              private userSerive: FetchService) { }
  doctorsList = [
    {
      name: 'Dr.Pavan',
      spec: 'General Physician',
      exp: '8 Years',
      fee: '500',
      address: 'Hyderabad',
      imgURL:'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
    },
    {
      name: 'Dr.Vinay',
      spec: 'Orthopedics',
      exp: '20',
      fee: '10000',
      address: 'Kukatpally',
      imgURL:'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
    },
    {
      name: 'Dr.Vamshi',
      spec: 'Radiology',
      exp: '9',
      fee: '10000',
      address: 'Madhapur',
      imgURL:'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
    },
    {
      name: 'Dr.Uday',
      spec: 'General Surgen',
      exp: '6',
      fee: '5000',
      address: 'Manikonda',
      imgURL:'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
    },
    {
      name: 'Dr.Karthik',
      spec: 'Dermotology',
      exp: '6',
      fee: '7000',
      address: 'Lingamppally',
      imgURL:'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
    },
  ]
  ngOnInit(): void {
    this.appointmentDetails = this.userSerive.signupDetails;
    if (this.appointmentDetails) {
      this.router.navigate(['login'])
    }
  }
  bookNow(doctor :any){
    console.log(doctor);
    this.userSerive.doctorDetails = doctor;
    this.router.navigate(['signup'])
  }

}
