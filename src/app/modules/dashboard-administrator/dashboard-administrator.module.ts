import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdministratorRoutingModule } from './dashboard-administrator-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardAdministratorRoutingModule
  ]
})
export class DashboardAdministratorModule { }
