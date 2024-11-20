import { Component } from '@angular/core';
import { addIcons } from 'ionicons';  // Asegúrate de que la librería de ionicons esté instalada
import { home } from 'ionicons/icons';  // Importa los íconos que quieres usar
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) 
  {
    // Aquí es donde registras los íconos para que puedan ser usados en toda la app
    addIcons({
      home      
    });
  }


  goToHome() {
    this.router.navigate(['/ExploreContainerComponent']);
  }
}
