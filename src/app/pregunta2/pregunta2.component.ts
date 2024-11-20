import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.scss'],
})
export class Pregunta2Component  {



  constructor(private router: Router) {}

goToResultado() {
  this.router.navigate(['/resultado']);
}



  // Definición de las preguntas
  questions = [
    {
      question: '¿Cual es la distancia de seguridad que se debe llevar para evitar colisionar con un vehiculo que circulo delante?',
      options: ['5 metros por cada diez km por hora', 'Aplica la regla de los dos segundos','10 metros por cada diez km por hora'],
      correctAnswer: 2
    },
  ]

  // Estado actual del juego
  currentQuestionIndex = 0;
  currentQuestion = this.questions[this.currentQuestionIndex];





  

}
