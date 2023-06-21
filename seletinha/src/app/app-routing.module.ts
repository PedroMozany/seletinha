import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './professor/home/home.component';
import { CadAlunoComponent } from './professor/cad-aluno/cad-aluno.component';
import { CadAtividadeComponent } from './professor/cad-atividade/cad-atividade.component';
import { LoginComponent } from './login/login.component';
import { CadProfessorComponent } from './cad-professor/cad-professor.component';
import { HomePageComponent } from './homePage/homePage.component';
import { LoginAlunoComponent } from './loginAluno/loginAluno.component';
import { AlunoComponent } from './aluno/aluno.component';
import { LocalComponent } from './local/local.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';

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
  path: 'loginAluno',
  component: LoginAlunoComponent
},{
  path: 'cadastroProfessor',
  component: CadProfessorComponent
},{
  path: 'homepage',
  component: HomePageComponent
},{
  path: 'atividade',
  component: AlunoComponent
},{
  path: 'local',
  component: LocalComponent
},{
  path: 'homeAluno',
  component: HomeAlunoComponent
},{
  path: '**',
  redirectTo: '/homepage'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }