import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from '../../../features/formulario/formulario.component';
import { ListarComponent } from '../../../features/listar/page/listar.component';
import { ContainerAuthComponent } from './container-auth.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAuthComponent,
    children: [
      {
        path: '',
        component: ListarComponent
      },
      {
        path: 'cadastrar',
        component: FormularioComponent
      },
      {
        path: ':id/editar',
        component: FormularioComponent
      }
    ]
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerAuthRoutingModule { }
