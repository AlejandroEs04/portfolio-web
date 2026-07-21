import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Offering } from "../types";

// Static seed data for now. Once the API exposes this data, swap the body of
// getOfferings() for `this.http.get<Offering[]>(`${environment.apiUrl}/offerings`)` -
// the return shape and isActive filtering convention are kept API-ready on purpose.
const OFFERINGS: Offering[] = [
    {
        id: 1,
        category: 'development',
        title: 'Web Applications',
        description: 'End-to-end web apps: Angular, React or Next.js on the frontend, backed by NestJS or .NET APIs.',
        skills: ['Angular', 'React', 'Next.js', 'NestJS'],
        isActive: true,
    },
    {
        id: 2,
        category: 'development',
        title: 'Mobile & Cross-Platform',
        description: 'React Native apps that share code and design language with your existing web platform.',
        skills: ['React Native', 'TypeScript'],
        isActive: true,
    },
    {
        id: 3,
        category: 'development',
        title: 'Desktop & Enterprise Software',
        description: 'C# .NET desktop applications for internal tooling and line-of-business systems.',
        skills: ['C# .NET', 'WPF', '.NET Desktop'],
        isActive: true,
    },
    {
        id: 4,
        category: 'development',
        title: 'APIs & Backend Systems',
        description: 'Backend services and API design in .NET or Python, with the right database for the job.',
        skills: ['C# .NET API', 'Python', 'PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB'],
        isActive: true,
    },
    {
        id: 5,
        category: 'engineering',
        title: 'Cloud Infrastructure',
        description: 'Architecture, deployment and cost-aware infrastructure on AWS.',
        skills: ['AWS'],
        isActive: true,
    },
    {
        id: 6,
        category: 'engineering',
        title: 'Networking',
        description: 'Network design, configuration and administration for offices and data closets.',
        skills: ['Cisco'],
        isActive: true,
    },
    {
        id: 7,
        category: 'engineering',
        title: 'IT Infrastructure & Servers',
        description: 'On-prem and hybrid server setup, maintenance and monitoring.',
        skills: ['Windows Server', 'Linux', 'Monitoring'],
        isActive: true,
    },
    {
        id: 8,
        category: 'engineering',
        title: 'Systems Integration & Consulting',
        description: 'Bridging software and infrastructure so every layer of the stack works together.',
        skills: ['Consulting', 'Architecture'],
        isActive: true,
    },
];

@Injectable({ providedIn: 'root' })
export class OfferingsService {
    getOfferings(): Observable<Offering[]> {
        return of(OFFERINGS.filter(o => o.isActive));
    }
}
