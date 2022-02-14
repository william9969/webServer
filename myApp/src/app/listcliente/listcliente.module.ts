import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListclientePageRoutingModule } from './listcliente-routing.module';

import { ListclientePage } from './listcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListclientePageRoutingModule
  ],
  declarations: [ListclientePage]
})
export class ListclientePageModule {}
