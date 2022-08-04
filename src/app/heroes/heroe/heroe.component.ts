import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'irronman';
  edad: number = 23;

  get nombreCapitalizado():string{
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre='spiderman';
  }
  cambiarEdad():void{
    this.edad=25;
  }

}
