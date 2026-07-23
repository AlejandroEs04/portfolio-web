import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ExperienceItem } from "../types";

// Static seed data for now. Once the API exposes this data, swap the body of
// getExperience() for `this.http.get<ExperienceItem[]>(`${environment.apiUrl}/experience`)` -
// the return shape and isActive filtering convention are kept API-ready on purpose.
// Update the entries below with real roles/dates, and add new ones as isActive: true.
const EXPERIENCE: ExperienceItem[] = [
    {
        id: 1,
        role: 'Freelance Full-Stack Developer',
        client: 'Independent / Multiple Clients',
        period: '2026',
        summary: 'Designing and building web and mobile application for clients offering products and services, mobile Platform enabling digital sales of products and services management and stock tracking',
        highlights: ['React', 'React Native', 'NestJS', 'PostgreSQL'],
        isActive: true,
    },
    {
        id: 2,
        role: 'IT & Infrastructure Consultant',
        client: 'Independent / Multiple Clients',
        period: '2022 — Present',
        summary: 'Planning and maintaining cloud and on-prem infrastructure, including networking, servers and cloud deployments.',
        highlights: ['AWS infrastructure & deployments', 'Cisco network configuration', 'Server administration & monitoring'],
        isActive: false,
    },
    {
        id: 3,
        role: 'Add your role',
        client: 'Add client or company name',
        period: 'Start — End',
        summary: 'Describe the engagement, responsibilities and impact here, then set isActive to true.',
        isActive: false,
    },
];

@Injectable({ providedIn: 'root' })
export class ExperienceService {
    getExperience(): Observable<ExperienceItem[]> {
        return of(EXPERIENCE.filter(e => e.isActive));
    }
}
