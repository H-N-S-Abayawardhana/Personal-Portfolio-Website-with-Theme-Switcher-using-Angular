// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would normally send the form data to a backend
      // Reset the form after submission
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
      }, 3000);
    }
  }
  
  get f() { return this.contactForm.controls; }
}