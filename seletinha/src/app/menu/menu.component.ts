import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() exibeMenu!: boolean;
  @Input() tela!: string;
  @Output() btnMenu = new EventEmitter();
  professor:boolean = true;

  constructor( private route: Router) {
   }


  ngOnInit(): void {
    let tipo = localStorage.getItem('tipo')

    if(tipo == "false"){
      this.professor = false;
    }
    if(tipo == 'true'){
      this.professor = true;
    }
    // if(this.tela == 'cadastroAluno'){
    //   const element = document.getElementById('cadastro');
    //   element!.classList.add('active');
    // }

    // if(this.tela == 'home'){
    //   const element = document.getElementById('home');
    //   element!.classList.add('active');
    // }

    // if(this.tela == 'cadastroAtividade'){
    //   const element = document.getElementById('atividade');
    //   element!.classList.add('active');
    // }
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
    this.route.navigate(['/home']);
  }

  telaCad(e:any){
    this.route.navigate(['/cadastroAluno']);
  }

  telaAtivi(e:any){
    this.route.navigate(['/cadastroAtividade']);
  }

  telaHomeAlu(e:any){
    this.route.navigate(['/homeAluno']);
  }

  telaLocal(e:any){
    this.route.navigate(['/local']);
  }

  telaJogo(e:any){
    this.route.navigate(['/atividade']);
  }

  sair(){
    localStorage.clear();
    this.route.navigate(['/homePage']);
  }

}
