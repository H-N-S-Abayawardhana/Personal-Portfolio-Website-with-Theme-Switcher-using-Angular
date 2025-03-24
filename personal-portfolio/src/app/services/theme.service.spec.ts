import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  currentTheme = this.isDarkMode.asObservable();

  constructor() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.next(savedTheme === 'dark');
    } else {
      // Check if user prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.next(prefersDark);
    }
    
    // Apply theme on init
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode.next(!this.isDarkMode.value);
    this.applyTheme();
  }

  private applyTheme() {
    const isDark = this.isDarkMode.value;
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}