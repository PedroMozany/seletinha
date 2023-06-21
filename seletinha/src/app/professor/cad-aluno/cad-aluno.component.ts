import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  tela = 'cadastroAluno';

  constructor(private http: HttpClient,
    private route: Router) { }

  cadastro(){
    if(this.name != undefined || this.idAluno != undefined || this.serie != undefined || this.turma != undefined ){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const url = 'http://localhost:8080/api/student';
      const formData = new FormData();
      formData.append('name',  this.name);
      formData.append('series',  `${this.serie}`);
      formData.append('registry',  `${this.idAluno}`);
      formData.append('team',  `${this.turma}`);
      this.http.post(url,formData,{ headers }).subscribe((e) => {
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
