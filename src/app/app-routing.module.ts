import { LoginComponent } from './components/login/login.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  {path:'appointment', component:AppointmentComponent},
  {path:'signup', component: SignupComponent},
  {path:'doctorDetails',component:DoctorDetailsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
