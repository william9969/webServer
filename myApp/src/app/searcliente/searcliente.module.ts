import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearclientePageRoutingModule } from './searcliente-routing.module';

import { SearclientePage } from './searcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearclientePageRoutingModule
  ],
  declarations: [SearclientePage]
})
export class SearclientePageModule {}
