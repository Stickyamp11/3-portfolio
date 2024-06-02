import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isSpanish: boolean = false;
  englishTexts = {
    description: "Hey there! I'm Manuel, a senior fullstack software developer with over 3 years of experience. Skilled in front-end and back-end technologies, I build efficient, scalable applications. Passionate about coding and continuous learning, I thrive on tackling challenging projects and delivering high-quality solutions.",
    lang1: "English",
    lang2: "Spanish",
    position: "Senior fullstack developer",
    experience: "3+ years of work experience",
    projects: "Some of my personal projects"
  }
  spanishTexts = {
    description: "Hola! Soy Manuel, un programador fullstack senior de software con más de 3 años de experiencia en el sector. Domino tanto el backend como el frontend. Me dedico a construir aplicaciones eficientes y escalables. Me encanta programar y seguir aprendiendo, además de enfrentarme a nuevos retos.",
    lang1: "Inglés",
    lang2: "Español",
    position: "Programador fullstack senior",
    experience: "3+ años de experiencia laboral",
    projects: "Proyectos personales"

  }
  selectedTexts = this.englishTexts;


  toogleLanguage(){
    this.isSpanish = !this.isSpanish;
    this.selectedTexts = this.selectedTexts.description.includes("Hola") ? this.englishTexts : this.spanishTexts;
  }
}
