import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() exibeMenu!: boolean;
  @Input() tela!: string;
  @Output() btnMenu = new EventEmitter();

  constructor() {
   }


  ngOnInit(): void {
    if(this.tela == 'cadastroAluno'){
      const element = document.getElementById('cadastro');
      element!.classList.add('active');
    }

    if(this.tela == 'home'){
      const element = document.getElementById('home');
      element!.classList.add('active');
    }
  }

  showMenu(){
    const toggle = document.getElementById('header-toggle');
    const nav = document.getElementById('nav-bar');
    const bodypd = document.getElementById('body-pd');
    const headerpd = document.getElementById('header');

    if (toggle && nav && bodypd && headerpd) {
      nav.classList.toggle('show');
      // change icon
      toggle.classList.toggle('bx-x');
      // add padding to body
      bodypd.classList.toggle('body-pd');
      // add padding to header
      headerpd.classList.toggle('body-pd');
    }
  }

  telaHome(e:any){
    this.btnMenu.emit(e);
  }

  telaCad(e:any){
    this.btnMenu.emit(e);
  }

  telaAtivi(e:any){
    this.btnMenu.emit(e);
  }


}
