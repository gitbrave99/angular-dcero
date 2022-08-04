import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [
    //que cosas quiero q sean publicas o visibles fueras de este moculo
    ListadoComponent,
  ],
  imports: [//
  CommonModule
  ],

})
export class HeroesModule {}
