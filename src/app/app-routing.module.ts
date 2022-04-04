import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'novo',
    loadChildren: () => import('./home/novo/novo.module').then(m => m.NovoModule)
  },
  {
    path: 'atualizar/:avatar/:first_name/:last_name/:email',
    loadChildren: () => import('./home/atualizar/atualizar.module').then(m => m.AtualizarModule)
  },
  {
    path: 'atualiza/:name/:job',
    loadChildren: () => import('./home/atualizar/atualizar.module').then(m => m.AtualizarModule)
  },
  {
    path:'',
    pathMatch: 'full', redirectTo: '/home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }