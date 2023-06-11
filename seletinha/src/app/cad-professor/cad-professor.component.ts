import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-cad-professor',
  templateUrl: './cad-professor.component.html',
  styleUrls: ['./cad-professor.component.scss']
})
export class CadProfessorComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  senha!: string;
  nome!: string;
  turma!: number;
  idprofessor!: number;


  constructor(private http: HttpClient) { }

  cadastro(){
    if(this.nome != undefined || this.turma != undefined || this.idprofessor != undefined || this.senha != undefined ){
      const url = '/teacher';
      const data = { name: this.nome,email: this.emailFormControl , password:  this.senha, team: this.turma, registry: this.idprofessor};
      this.http.post(url,data).subscribe((e) => {
        console.log(e);
        return;
      });
      return;
    } else{
      return window.alert("Prencha todos os campos !!");
    }
  }

  ngOnInit(): void {
  }

}
