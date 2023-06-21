import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.scss']
})
export class AlunoDetailsComponent implements OnInit {

  tela = 'home';
  turma!:any;

  constructor() { }

  ngOnInit(): void {

  }

}
