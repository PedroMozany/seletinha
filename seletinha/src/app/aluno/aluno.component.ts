import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {


  tela = 'aluno';
  lixeira: boolean = false;
  play: boolean = false;
  jogo1: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
