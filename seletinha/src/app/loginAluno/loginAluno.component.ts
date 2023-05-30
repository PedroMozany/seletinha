import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginAluno',
  templateUrl: './loginAluno.component.html',
  styleUrls: ['./loginAluno.component.css']
})
export class LoginAlunoComponent implements OnInit {

  codAluno!: string;

  constructor() { }

  ngOnInit() {
  }

}
