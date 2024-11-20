import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeoriaComponent } from './teoria.component';

const routes: Routes = [
  {
    path: '',
    component: TeoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeoriaRoutingModule { }
