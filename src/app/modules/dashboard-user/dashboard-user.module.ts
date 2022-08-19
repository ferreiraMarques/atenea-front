import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowProfileComponent } from './components/show-profile/show-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    ShowProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule
  ]
})
export class DashboardUserModule { }
