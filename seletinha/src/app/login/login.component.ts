import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  senha!: string;
  disabledLogin: boolean = false;

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
 if(this.senha != undefined ){
      const url = 'http://localhost:8080/api/auth/login';
      const formData = new FormData();
      formData.append('email',  `${this.emailFormControl.value}`);
      formData.append('password',  `${this.senha}`);
      this.http.post(url,formData).subscribe((e:any) => {
        localStorage.setItem('token', e.token);
        localStorage.setItem('tipo','true')
        this.router.navigate(['/home']);
      });
      return;
    } else{
      return window.alert("Prencha todos os campos !!");
    }
  }

  cadastro(){
    this.router.navigate(['/cadastroProfessor']);
  }

}

