import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seletinha';
  exibeMenu = true;
  tela = '';

  constructor(private route: Router){ }

  public onRouterMenuActivate(event: any){
    if(this.route.url === "/login"){
      this.exibeMenu = false;
    } else{
      this.exibeMenu = true;
    }

    if(this.route.url === "/cadastroAluno"){
      this.tela = 'cadastroAluno';
    }

    if(this.route.url === "/cadastroAtividade"){
      this.tela = 'cadastroAtividade';
    }

    if(this.route.url === "/cadastroProfessor"){
      this.tela = 'cadastroProfessor';
    }
  }
}
