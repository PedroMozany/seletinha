import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   dados = [{
    "nameteacher": "oi",
    "registryTeacher": 335,
    "listTurma":[
      {
        "team": 19
      },
       {
        "team": 18
      },
       {
        "team": 17
      },
       {
        "team": 1
      },
       {
        "team": 12
      },
       {
        "team": 13
      }
    ]
  }]

  tela = 'home';
  turma!:any;

  constructor( private route: Router) { }

  ngOnInit(): void {
    this.turma = this.dados[0];
    console.log(this.turma)
  }

  aluno(e:any){
    localStorage.setItem('turma',e);
    this.route.navigate(['/alunoDetails']);
  }
}
