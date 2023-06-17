import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogModuleComponent } from '../dialog-module/dialog-module.component';

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
  disabledBtn: boolean = true;


  constructor(private http: HttpClient,
    public dialog: MatDialog) { }

  cadastro(){
    if(this.nome != undefined || this.turma != undefined || this.idprofessor != undefined || this.senha != undefined ){
      const url = 'http://localhost:4200/api/auth/signup';
      const formData = new FormData();
      formData.append('name',  this.nome);
      formData.append('email',  `${this.emailFormControl.value}`);
      formData.append('password',  `${this.senha}`);
      formData.append('team',  `${this.turma}`);
      formData.append('registry',  `${this.idprofessor}`);
      this.http.post(url,formData).subscribe((e:any) => {
        this.openDialog(this.nome);
      });
      return;
    } else{
      return window.alert("Prencha todos os campos !!");
    }
  }

  ngOnInit(): void {
  }

  openDialog(e:any): void {
    this.disabledBtn = false;
    const dialogRef = this.dialog.open(DialogModuleComponent, {
      width:'300px',
      height:'300px',
      data: e
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
