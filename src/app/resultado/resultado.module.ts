import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { IonicModule } from '@ionic/angular';
import { ResultadoComponent } from './resultado.component';



@NgModule({
  declarations: [ResultadoComponent],
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    IonicModule
  ],
  exports: [ResultadoComponent]  // Exporta el componente si es necesario
})
export class ResultadoModule { }
