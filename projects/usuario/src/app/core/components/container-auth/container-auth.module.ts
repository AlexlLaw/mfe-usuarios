import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormularioComponent } from '../../../features/formulario/formulario.component';
import { ListarComponent } from '../../../features/listar/page/listar.component';
import { ContainerAuthRoutingModule } from './container-auth-routing.module';
import { ContainerAuthComponent } from './container-auth.component';

@NgModule({
  declarations: [
    ContainerAuthComponent, 
    ListarComponent, 
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContainerAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContainerAuthModule { }
