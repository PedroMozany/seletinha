import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlunoComponent } from '../modal-aluno/modal-aluno.component';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.scss']
})
export class AlunoDetailsComponent implements OnInit {

  dados = [
      {
        "registry": 19,
        "name": 'Ana',
        "series": 1,
        "team": 19
      },
       {
        "registry": 19,
        "name": 'Amanda',
        "series": 1,
        "team": 19
      },
       {
        "registry": 19,
        "name": 'Pedro',
        "series": 1,
        "team": 19
      },
       {
        "registry": 19,
        "name": 'Marcela',
        "series": 1,
        "team": 19
      },
       {
        "registry": 19,
        "name": 'Maria',
        "series": 1,
        "team": 19
      },
       {
        "registry": 19,
        "name": 'João',
        "series": 1,
        "team": 19
      }

  ]

  tela = 'home';
  turma!:any;
  id: any;

  constructor(private http: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.turma = this.dados;
    console.log(this.turma);
    this.id = localStorage.getItem('turma');
    this.atualizaDados();
  }

  atualizaDados(){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const params = new HttpParams().set('team', `${this.id}`);
      const url = 'http://localhost:8080/api/listStudent';
      this.http.get(url,{headers, params}).subscribe((e:any) => {
       this.turma = e;
       return;
      });
      return;
  }

  aluno(e:any){
    const dialogRef = this.dialog.open(ModalAlunoComponent, {
      width:'552px',
      height:'412px',
      data: e
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
