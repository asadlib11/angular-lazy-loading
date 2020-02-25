import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomedetailsComponent } from './components/homedetails/homedetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: HomedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
