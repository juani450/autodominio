import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenRoutingModule } from './examen-routing.module';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { ExamenComponent } from './examen.component';


@NgModule({
  declarations: [ExamenComponent],
  imports: [
    CommonModule,
    ExamenRoutingModule,
    IonicModule
  ],
  exports: [ExamenComponent]  // Exporta el componente si es necesario
})
export class ExamenModule { }
