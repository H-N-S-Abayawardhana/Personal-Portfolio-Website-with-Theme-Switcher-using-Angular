// src/app/components/about/about.component.ts
import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Replace with your own information
  aboutMe = `I am a passionate web developer with expertise in building modern web applications. 
  I specialize in frontend technologies like Angular, React, and Vue.js, as well as backend technologies 
  like Node.js and Express. I am dedicated to creating clean, efficient, and user-friendly applications 
  that solve real-world problems.`;
  
  experiences: Experience[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Lead development of enterprise web applications using Angular. Implemented responsive designs and improved performance by 40%.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Creations',
      period: '2018 - 2020',
      description: 'Developed and maintained client websites. Created custom CMS solutions and e-commerce platforms.'
    }
  ];
  
  education: Education[] = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2016 - 2018',
      description: 'Focused on web technologies and software engineering principles.'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2012 - 2016',
      description: 'Graduated with honors. Coursework included data structures, algorithms, and web development.'
    }
  ];
}