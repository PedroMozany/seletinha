import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.scss']
})
export class CadAlunoComponent implements OnInit {

  name!: string;
  idAluno!: number;
  serie!: number;
  turma!: number;

  constructor(private http: HttpClient) { }

  cadastro(){
    if(this.name != undefined || this.idAluno != undefined || this.serie != undefined || this.turma != undefined ){
      const url = 'https://localhost:8080/api/student';
      const data = { name: this.name, series:  this.serie, registry: this.idAluno, team: this.turma};
      this.http.post(url,data).subscribe((e) => {
        console.log(e);
        return;
      });
      return;
    } else{
      return window.alert("Prencha todos os campos !!");
    }
  }

  cancelar(){
    return window.alert("Cadastro cancelado !!");
  }

  selectSerie(e: any){
    this.serie = e.value;
  }

  selectTurma(e: any){
    this.turma = e.value;
  }

  ngOnInit(): void {
  }

}
