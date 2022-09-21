import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste.component';



@NgModule({
  declarations: [TesteComponent],
  imports: [
    CommonModule,
    TesteRoutingModule
  ]
})
export class TesteModule { }
