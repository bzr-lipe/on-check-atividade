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
<<<<<<< HEAD
* <on-verdadeiro-falso isTruth: true></on-verdadeiro-falso>
=======
* <on-verdadeiro-falso isTruth: true(Caso seja verdadeira, false caso falsa)></on-verdadeiro-falso>
>>>>>>> 349a52fa4bc9df9adca8d4f78c77fc630c178b49
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
<<<<<<< HEAD
    console.log(BotoesFila)
    
    if (verdadeira == 'true'){
      console.log('okok')
      
      TweenMax.to(BotoesFila.lastElementChild, 0.5, {opacity: 0})
      TweenMax.to(BotoesFila.firstElementChild, 0.5, {width: '200px'})
    } else {
      TweenMax.to(BotoesFila.firstElementChild, 0.5, {opacity: 0, width: '0px'})
      TweenMax.to(BotoesFila.lastElementChild, 0.5, {width: '140px'})
      TweenMax.to(BotoesFila.firstElementChild, 4, { position: 'absolute'})

    }

=======
    const btnVerdadeiro = BotoesFila.firstChild.parentElement.parentElement;
    const btnFalso = BotoesFila.lastChild.parentElement.parentElement;

    console.log(BotoesFila.lastChild.parentElement)
    
>>>>>>> 349a52fa4bc9df9adca8d4f78c77fc630c178b49


  }

  
   
}
