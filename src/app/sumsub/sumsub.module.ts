import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumsubPageRoutingModule } from './sumsub-routing.module';

import { SumsubPage } from './sumsub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumsubPageRoutingModule
  ],
  declarations: [SumsubPage]
})
export class SumsubPageModule {}
