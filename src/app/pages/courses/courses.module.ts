import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses.component';
import {Route, RouterModule, Routes} from '@angular/router';

const routes: Array<Route> = [
  {
    path: '',
    component: CoursesComponent,
  }
]

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CoursesModule { }
