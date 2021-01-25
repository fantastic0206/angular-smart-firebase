import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithdrawalreportComponent } from './withdrawalreport.component';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawalreportRoutingModule { }
