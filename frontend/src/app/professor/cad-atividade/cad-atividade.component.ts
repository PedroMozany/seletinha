import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-cad-atividade',
  templateUrl: './cad-atividade.component.html',
  styleUrls: ['./cad-atividade.component.scss']
})
export class CadAtividadeComponent implements OnInit {

  alunosSelect = new FormControl('');
  allAlunos: string[] = ['Ana', 'Marcos', 'João', 'Marcelo', 'Marcela', 'Pedro', 'Lucas'];


  constructor() { }

  ngOnInit(): void {
  }



}
