import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtroservicioPage } from './otroservicio.page';

const routes: Routes = [
  {
    path: '',
    component: OtroservicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtroservicioPageRoutingModule {}
