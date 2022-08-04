import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spidermna', 'ironman', 'hulk', 'thor'];
  heroesDels: string[] = [];
  heroeBorrado: string = '';
  eliminado: boolean = false;
  existentes:boolean=false;

  eliminarHeroe(): void {
    if (this.heroes.length >= 1) {
      this.heroeBorrado = this.heroes.pop() || '';
      this.eliminado=true;
      console.log('heroe borrado: ', this.heroeBorrado);
      this.mostrarListEliminados(this.heroeBorrado);
    }else{
      this.existentes=true;
    }
  }

  mostrarListEliminados(heroe: any): void {
    this.heroesDels.push(heroe);
  }
}
