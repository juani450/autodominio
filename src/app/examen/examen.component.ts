import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss'],
})
export class ExamenComponent  {

  

  constructor(private router: Router) {}

  // Definición de las preguntas
  questions = [
    {
      question: 'Los siguientes son comportamientos con alto grado de riesgo, excepto...',
      options: ['Tener los espejos retrovisores desalineados', 'Ubicarse detras de los colectivos para evitar el viento', 'Adelantar por la izquierda', 'Transitar entre los dos carriles de vehiculos'],
      correctAnswer: 1 // Índice de la respuesta correcta
    },
    {
      question: '¿Cuánto es 5 + 3?',
      options: ['5', '7', '8', '10'],
      correctAnswer: 2
    },
    {
      question: '¿En qué año llegó el hombre a la luna?',
      options: ['1965', '1969', '1975', '1980'],
      correctAnswer: 1
    }
  ];

  // Estado actual del juego
  currentQuestionIndex = 0;
  currentQuestion = this.questions[this.currentQuestionIndex];
  


 

goToPregunta2() {
  this.router.navigate(['/pregunta2']);
}


    
  }
  




