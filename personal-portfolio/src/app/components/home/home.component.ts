// src/app/components/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // You can replace these with your own information
  name = 'John Doe';
  title = 'Full Stack Developer';
  description = 'I build responsive web applications with modern technologies. Passionate about creating clean, efficient, and user-friendly solutions.';
  skills = ['Angular', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'MongoDB'];
}