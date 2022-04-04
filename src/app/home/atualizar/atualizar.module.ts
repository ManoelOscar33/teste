import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtualizarRoutingModule } from './atualizar.routing.module';
import { AtualizarComponent } from './atualizar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AtualizarComponent],
  imports: [
    CommonModule,
    AtualizarRoutingModule,
    ReactiveFormsModule
  ]
})
export class AtualizarModule { }
