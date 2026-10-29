import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Alunos } from './components/cadastrar/alunos/alunos';

const routes: Routes = [
  {path:'', component:Home},
  {path:'cadastrar/alunos', component:Alunos}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
