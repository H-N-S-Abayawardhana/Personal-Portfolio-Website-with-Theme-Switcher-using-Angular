// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { Project } from '../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Replace with your actual projects
  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      imageUrl: 'assets/projects/project1.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop interface and user authentication.',
      imageUrl: 'assets/projects/project2.jpg',
      technologies: ['React', 'Firebase', 'Material UI'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://task-manager-demo.example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather using a third-party API.',
      imageUrl: 'assets/projects/project3.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weather-app-demo.example.com'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular, featuring theme switching capability.',
      imageUrl: 'assets/projects/project4.jpg',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourusername.github.io'
    }
  ];

  filterProjects(technology: string) {
    if (technology === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.technologies.includes(technology)
    );
  }
}