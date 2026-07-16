import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private toastr = inject(ToastrService);

  sending = false;

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.toastr.error('Please fill all the fields', 'Error')
      return;
    }
    this.sending = true;
    this.contactService.sendMessage(this.contactForm.getRawValue()).subscribe({
      next: () => {
        this.contactForm.reset();
        this.toastr.success('Message sended successfully', 'Sended');
        this.sending = false;
      },
      error: () => {
        this.toastr.error('An error occured. Try again.', 'Error');
        this.sending = false;
      },
    });
  }
}
