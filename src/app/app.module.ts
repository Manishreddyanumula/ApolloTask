import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DoctorDetailsComponent,
    LoginComponent,
    AppointmentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
