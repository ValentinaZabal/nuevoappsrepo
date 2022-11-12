import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [  {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),
    },
    {
      path: 'nosotras',
      loadChildren: () => import('../nosotras/nosotras.module').then( m => m.NosotrasPageModule)
    },
    {
      path: 'configuracion',
      loadChildren: () => import('../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
    },
    {
      path: 'plomeros',
      loadChildren: () => import('../plomeros/plomeros.module').then( m => m.PlomerosPageModule),
    },
    {
      path: 'electricistas',
      loadChildren: () => import('../electricistas/electricistas.module').then( m => m.ElectricistasPageModule)
    },
    {
      path: 'gasistas',
      loadChildren: () => import('../gasistas/gasistas.module').then( m => m.GasistasPageModule)
    },
    {
      path: 'problemas',
      loadChildren: () => import('../problemas/problemas.module').then( m => m.ProblemasPageModule)
    },
    {
    path: 'otroservicio',
    loadChildren: () => import('../otroservicio/otroservicio.module').then( m => m.OtroservicioPageModule)
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
