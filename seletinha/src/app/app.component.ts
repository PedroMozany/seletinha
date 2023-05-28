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

  constructor(private route: Router){ }

  public onRouterMenuActivate(event: any){
    if(this.route.url === "/login" || this.route.url === "/cadastroProfessor" ){
      this.exibeMenu = false;
    } else{
      this.exibeMenu = true;
    }
  }
}
