import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListclientePage } from './listcliente.page';

const routes: Routes = [
  {
    path: '',
    component: ListclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListclientePageRoutingModule {}
