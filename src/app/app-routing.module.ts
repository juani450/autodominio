import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MotoComponent } from './moto/moto.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { ExamenComponent } from './examen/examen.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { TeoriaComponent } from './teoria/teoria.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/explore',  // Redirige a la ruta /explore al iniciar la app
    pathMatch: 'full',
  },
  {
    path: 'explore',  // Ruta donde se encuentra tu ExploreContainerComponent
    component: ExploreContainerComponent
  },
  {
    path: 'moto',  // Ruta para el componente MotoComponent
    component: MotoComponent  // Asocia MotoComponent a la ruta /moto
  },
  {
    path: 'examen',  // Ruta para el componente MotoComponent
    component: ExamenComponent  // Asocia MotoComponent a la ruta /moto
  },
  {
    path: 'pregunta2',  // Ruta para el componente MotoComponent
    component: Pregunta2Component  // Asocia MotoComponent a la ruta /moto
  },
  {
    path: 'resultado',  // Ruta para el componente MotoComponent
    component: ResultadoComponent  // Asocia MotoComponent a la ruta /moto
  },
  {
    path: 'teoria',  // Ruta para el componente MotoComponent
    component: TeoriaComponent  // Asocia MotoComponent a la ruta /moto
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
