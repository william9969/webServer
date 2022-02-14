import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearclientePage } from './searcliente.page';

const routes: Routes = [
  {
    path: '',
    component: SearclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearclientePageRoutingModule {}
