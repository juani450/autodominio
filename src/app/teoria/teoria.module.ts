import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeoriaRoutingModule } from './teoria-routing.module';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { TeoriaComponent } from './teoria.component';


@NgModule({
  declarations: [TeoriaComponent],
  imports: [
    CommonModule,
    TeoriaRoutingModule,
    IonicModule
  ],
  exports: [TeoriaComponent]  // Exporta el componente si es necesario
})
export class TeoriaModule { }
