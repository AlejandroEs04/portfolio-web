import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Client } from "../types";

// Static seed data for now. Once the API exposes this data, swap the body of
// getClients() for `this.http.get<Client[]>(`${environment.apiUrl}/clients`)` -
// the return shape and isActive filtering convention are kept API-ready on purpose.
// Entries start deactivated on purpose: add real client names, then flip isActive to true.
const CLIENTS: Client[] = [
    { id: 1, name: 'Add your client name', industry: 'Industry', isActive: false },
    { id: 2, name: 'Add your client name', industry: 'Industry', isActive: false },
    { id: 3, name: 'Add your client name', industry: 'Industry', isActive: false },
];

@Injectable({ providedIn: 'root' })
export class ClientsService {
    getClients(): Observable<Client[]> {
        return of(CLIENTS.filter(c => c.isActive));
    }
}
