import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cad-atividade',
  templateUrl: './cad-atividade.component.html',
  styleUrls: ['./cad-atividade.component.scss']
})
export class CadAtividadeComponent implements OnInit {

  turma!: string;
  serie!: string;
  atividade!: string;
  tela = 'cadastroAtividade';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cancel(){
    this.turma = "";
    this.serie = "";
    this.atividade = "";
  }

  save(){

    if(this.serie != undefined || this.turma != undefined || this.atividade != undefined ){
      const url = 'http://localhost:8080/api/atividades';
      const formData = new FormData();
      formData.append('team',  this.turma);
      formData.append('serie',  `${this.serie}`);
      formData.append('nome',  `${this.atividade}`);
      this.http.post(url,formData).subscribe((e:any) => {
        return window.alert("Cadastro realizado com sucesso");
      });
      return;
    } else{
      return window.alert("Prencha todos os campos !!");
    }
  }



}
