import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumsubPage } from './sumsub.page';

const routes: Routes = [
  {
    path: '',
    component: SumsubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumsubPageRoutingModule {}
