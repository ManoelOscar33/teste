import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoComponent } from './novo.component';

const routes: Routes = [
  {
    path: '',
    component: NovoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NovoRoutingModule { }