import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
contactForm: FormGroup;
  success = false;
  error = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      const payload = this.contactForm.value;
      console.log('Submitting:', payload);

      // Simulate success response
      this.success = true;
      this.error = false;

      // Reset form after submission
      this.contactForm.reset();
    } else {
      this.error = true;
      this.success = false;
    }
  }
}
