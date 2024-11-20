import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pregunta2RoutingModule } from './pregunta2-routing.module';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { Pregunta2Component } from './pregunta2.component';


@NgModule({
  declarations: [Pregunta2Component],
  imports: [
    CommonModule,
    Pregunta2RoutingModule,
    IonicModule
  ],
  exports: [Pregunta2Component]  // Exporta el componente si es necesario
})
export class Pregunta2Module { }
