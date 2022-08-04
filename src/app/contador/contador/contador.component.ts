import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h3>la base es: <strong>{{base}}</strong></h3>
    <button (click)="operacionCounter(+base)">{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="operacionCounter(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{
    public title:string='Counter Component';
    numero:number=0;
    base:number=5;
  
    operacionCounter(valor:number):void{
      this.numero += valor;
    }

}