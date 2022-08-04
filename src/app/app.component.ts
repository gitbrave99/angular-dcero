import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
  
})
export class AppComponent {
  public title:string = 'Contador App';
  numero:number=0;
  base:number=5;

  operacionCounter(valor:number):void{
    this.numero += valor;
  }


}
