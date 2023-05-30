import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './professor/home/home.component';
import { CadAlunoComponent } from './professor/cad-aluno/cad-aluno.component';
import { CadAtividadeComponent } from './professor/cad-atividade/cad-atividade.component';
import { LoginComponent } from './login/login.component';
import { CadProfessorComponent } from './cad-professor/cad-professor.component';
import { HomePageComponent } from './homePage/homePage.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'homepage',
  pathMatch: "full"
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'cadastroAluno',
  component: CadAlunoComponent
},{
  path: 'cadastroAtividade',
  component: CadAtividadeComponent
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'cadastroProfessor',
  component: CadProfessorComponent
},{
  path: 'homepage',
  component: HomePageComponent
},{
  path: '**',
  redirectTo: '/homepage'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
