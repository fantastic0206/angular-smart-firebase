import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlreportComponent } from './all-plreport/all-plreport.component';

const routes: Routes = [
  {
    path: '',
    component: AllPlreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlreportRoutingModule { }
