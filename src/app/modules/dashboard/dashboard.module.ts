import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesManagerComponent } from './components/courses-manager/courses-manager.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    QuizComponent,
    AdministrationComponent,
    CoursesManagerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
