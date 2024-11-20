import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoRoutingModule } from './moto-routing.module';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { MotoComponent } from './moto.component';


@NgModule({
  declarations: [MotoComponent],
  imports: [
    CommonModule,
    MotoRoutingModule,
    IonicModule  // Asegúrate de incluir IonicModule en las importaciones
  ],
  exports: [MotoComponent]  // Exporta el componente si es necesario
})
export class MotoModule { }
