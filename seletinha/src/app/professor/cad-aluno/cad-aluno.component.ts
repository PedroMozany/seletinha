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
      const url = 'http://localhost:8080/api/student';
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

  trocaTela(e:any){
    console.log(e)
    if(this.route.url != "/cadastroAluno"){
      this.route.navigate(['/cadastroAluno']);
    }
  }

  telaCad(e:any){
    console.log(e)
  }

  ngOnInit(): void {
  }

}
