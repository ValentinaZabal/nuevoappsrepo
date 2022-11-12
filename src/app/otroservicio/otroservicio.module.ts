import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtroservicioPageRoutingModule } from './otroservicio-routing.module';

import { OtroservicioPage } from './otroservicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtroservicioPageRoutingModule
  ],
  declarations: [OtroservicioPage]
})
export class OtroservicioPageModule {}
