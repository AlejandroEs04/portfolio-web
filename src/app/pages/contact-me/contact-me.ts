import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.contactService.sendMessage(this.contactForm.getRawValue()).subscribe({
      next: () => {
        this.contactForm.reset();
        console.log('Message sent successfully');
      },
      error: (err) => console.error('Failed to send message', err),
    });
  }
}
