import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../types';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  sendMessage(data: ContactMessage): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/contact`, data);
  }
}
