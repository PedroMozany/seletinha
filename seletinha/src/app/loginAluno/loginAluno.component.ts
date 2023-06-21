import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginAluno',
  templateUrl: './loginAluno.component.html',
  styleUrls: ['./loginAluno.component.css']
})
export class LoginAlunoComponent implements OnInit {

  codAluno!: string;

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.codAluno != undefined){
      localStorage.setItem('tipo','false')
      this.router.navigate(['/homeAluno']);
      // const url = 'http://localhost:8080/api/auth/student';
      // const formData = new FormData();
      // formData.append('registry',  `${this.codAluno}`);
      // this.http.post(url,formData).subscribe((e:any) => {

      //   this.router.navigate(['/homeAluno']);
      // });
    }

  }

}
