import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'on-check-atividade',
  templateUrl: './on-check-atividade.html',
  styleUrls:['./on-check-atividade.css']
})

export class onCheckAtividade implements OnInit {
  @Input() isTruth: string;
  botoes = document.getElementsByTagName('on-check-atividade');
  classes = ['btn-check-individual'];
  constructor() {}  
  ngOnInit(): void {
  }

  verifica (e:MouseEvent){
    const verdadeira = this.isTruth;
    const click = e.target as HTMLElement;
    const BotoesFila = click.parentNode as HTMLElement;
    const btnVerdadeiro = BotoesFila.firstElementChild
    const btnFalso = BotoesFila.lastElementChild


    if (verdadeira == "true") {
        btnVerdadeiro.classList.add('verdadeiro');
        btnFalso.classList.add('errado')
    } else {
      btnFalso.classList.add('falso');
      btnVerdadeiro.classList.add('errado');
    }
  }

  
   
}
