import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.scss'],
})
export class MotoComponent {

  constructor(private router: Router) {}

goToExamen() {
  this.router.navigate(['/examen']);
}


goToTeoria() {
  this.router.navigate(['/teoria']);

}
}