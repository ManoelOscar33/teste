import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { AtualizarComponent } from './atualizar.component';

const routes: Routes = [
  {
    path: '',
    component: AtualizarComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AtualizarRoutingModule { }
