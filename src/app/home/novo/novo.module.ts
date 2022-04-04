import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoRoutingModule } from './novo.routing.module';
import { NovoComponent } from './novo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NovoComponent],
  imports: [
    CommonModule,
    NovoRoutingModule,
    ReactiveFormsModule
  ]
})
export class NovoModule { }
