import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { MotoModule } from './moto/moto.module';
import { ExamenModule } from './examen/examen.module';
import { Pregunta2Module } from './pregunta2/pregunta2.module';

@NgModule({
  declarations: [AppComponent,
    ExploreContainerComponent  // Declara tu componente aquí
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MotoModule, ExamenModule, Pregunta2Module],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
