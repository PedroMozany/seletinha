import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Pergunta {
  pergunta: string;
  alternativa1: string;
  alternativa2: string;
  alternativa3: string;
  alternativa4: string;
  resposta: string;
}


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  dadosjogo: Pergunta[] = [{
    pergunta:"Qual destes materiais é reciclável?",
    alternativa1: "Papelhigiênico",
    alternativa2: "Garrafa plástica",
    alternativa3: "Resto de comida",
    alternativa4: "Folhas das árvores",
    resposta: "b"
  },{
    pergunta:"Qual a cor do recipiente para descarte de materiais não recicláveis em geral?",
    alternativa1: "Vermelho",
    alternativa2: "Verde",
    alternativa3: "Cinza",
    alternativa4: "Azul",
    resposta: "c"
  },
  {
    pergunta:"Qual destes materiais não é reciclável?",
    alternativa1: "Garrafa de vidro",
    alternativa2: "Papel",
    alternativa3: "Lata de alumínio",
    alternativa4: "Guardanapo sujo",
    resposta: "d"
  },
  {
    pergunta:"O que devemos fazer com o lixo reciclável?",
    alternativa1: "Colocar tudo no mesmo saco",
    alternativa2: "Jogar no lixo comum",
    alternativa3: "Separar em sacos diferentes conforme o material (papel- plástico- metal)",
    alternativa4: "Enterrar no quintal",
    resposta: "c"
  }]




  tela = 'aluno';
  pulsate: boolean = true;
  pontos:number = 0;

  jogo1: boolean = true;
  lixeira: boolean = false;
  play: boolean = true;
  fraseFinal: boolean = false;
  frase: boolean = false;
  fraseCorrect: boolean = false;
  fraseFaill: boolean = false;
  atv: boolean = false;
  atv1: boolean = false;
  atv2: boolean = false;
  atv3: boolean = false;
  atv4: boolean = false;
  atv5: boolean = false;
  atv6: boolean = false;
  value: any;
  isDivDisabled: boolean = false;
  index:number = 0;

  jogo2: boolean = false;
  labelPosition!:string;
  indexjogo:number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.questionsQuiz();
  }

  btnPlay(){
    this.play = false;
    this.lixeira = true;
    this.frase = true;
    this.atv = true;
    this.atv1 = true;
    this.value = 4;
    this.index = 1;
  }

  atividade(e: number){
    if(this.value === e){
      this.fraseCorrect = true;
      this.pontos++;
      this.isDivDisabled = true;
      this.index++;

      setTimeout(() => {
      if(this.index === 2){
        this.atv1 = false;
        this.atv2 = true;
        this.value = 4;
        this.fraseCorrect = false;
        this.isDivDisabled = false
      }

      if(this.index === 3){
        this.atv2 = false;
        this.atv3 = true;
        this.value = 6;
        this.fraseCorrect = false;
        this.isDivDisabled = false
      }

      if(this.index === 4){
        this.atv3 = false;
        this.atv4 = true;
        this.value = 4;
        this.fraseCorrect = false;
        this.isDivDisabled = false
      }

      if(this.index === 5){
        this.atv4 = false;
        this.atv5 = true;
        this.value = 5;
        this.fraseCorrect = false;
        this.isDivDisabled = false
      }

      if(this.index === 6){
        this.atv5 = false;
        this.atv6 = true;
        this.value = 5;
        this.fraseCorrect = false;
        this.isDivDisabled = false
      }

      if(this.index === 7){
        this.atv6 = false;
        this.lixeira = false;
        this.frase = false;
        this.value = 0;
        this.fraseCorrect = false;
        this.fraseFinal = true;
      }

      }, 3000);

    } else{
      this.fraseFaill = true;
      this.isDivDisabled = true;
      this.index++;

      setTimeout(() => {
     if(this.index === 2){
        this.atv1 = false;
        this.atv2 = true;
        this.value = 4;
        this.fraseFaill = false;
        this.isDivDisabled = false
      }

      if(this.index === 3){
        this.atv2 = false;
        this.atv3 = true;
        this.value = 6;
        this.fraseFaill = false;
        this.isDivDisabled = false
      }

      if(this.index === 4){
        this.atv3 = false;
        this.atv4 = true;
        this.value = 4;
        this.fraseFaill = false;
        this.isDivDisabled = false
      }

      if(this.index === 5){
        this.atv4 = false;
        this.atv5 = true;
        this.value = 1;
        this.fraseFaill = false;
        this.isDivDisabled = false
      }

      if(this.index === 6){
        this.atv5 = false;
        this.atv6 = true;
        this.value = 5;
        this.fraseFaill = false;
        this.isDivDisabled = false
      }

      if(this.index === 7){
        this.atv6 = false;
        this.lixeira = false;
        this.frase = false;
        this.value = 0;
        this.fraseFaill = false;
        this.fraseFinal = true;
      }


      }, 3000);
    }
  }


  proximo(): void {
    if (this.indexjogo < this.dadosjogo.length - 1) {
      this.indexjogo++;
    }
  }

  finalizar(): void {
   //calculo
  }

  questionsQuiz(){
    const url = 'http://localhost:8080/api/quiz'
    let params = new HttpParams()
    .set('nivel', 'facil')
    .set('tipo', 'Reciclagem')
    .set('quantidade','10');
    this.http.get(url, { params: params }).subscribe((e:any) => {
        console.log(e);
    });
  }

}
