import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { TweenMax } from 'gsap'

/**
* @name OnVerdadeiroFalso
* @description
* Este componente cria a interação para verdadeiro ou falso
*
* @usage
* ```html
*
* <on-verdadeiro-falso isTruth: true(Caso seja verdadeira, false caso falsa)></on-verdadeiro-falso>
* ```
*/


@Component({
  selector: 'on-verdadeiro-falso',
  templateUrl: './on-check-atividade.html',
  styleUrls:['./on-check-atividade.css']
})

export class OnVerdadeiroFalsoComponent implements OnInit {
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
    const btnVerdadeiro = BotoesFila.firstChild.parentElement.parentElement;
    const btnFalso = BotoesFila.lastChild.parentElement.parentElement;

    console.log(BotoesFila.lastChild.parentElement)
    


  }

  
   
}
