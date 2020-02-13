import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MensajeComponent } from './mensaje/mensaje.component';


@NgModule({
  declarations: [
    MensajeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MensajeComponent
  ]
})
export class ComponentsModule { }