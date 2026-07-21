import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../components/project/project';
import { ProjectService } from '../../services/project.service';
import { OfferingsService } from '../../services/offerings.service';
import { ExperienceService } from '../../services/experience.service';
import { ClientsService } from '../../services/clients.service';
import { ScrollReveal } from '../../directives/scroll-reveal';
import { Project as ProjectType, Offering, ExperienceItem, Client } from '../../types';

@Component({
  selector: 'app-home',
  imports: [Project, RouterLink, ScrollReveal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private projectService = inject(ProjectService);
  private offeringsService = inject(OfferingsService);
  private experienceService = inject(ExperienceService);
  private clientsService = inject(ClientsService);

  projects = signal<ProjectType[]>([]);
  offerings = signal<Offering[]>([]);
  experience = signal<ExperienceItem[]>([]);
  clients = signal<Client[]>([]);

  developmentOfferings = computed(() => this.offerings().filter(o => o.category === 'development'));
  engineeringOfferings = computed(() => this.offerings().filter(o => o.category === 'engineering'));

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects.set(data),
      error: (err) => console.error('Failed to load projects', err),
    });

    this.offeringsService.getOfferings().subscribe({
      next: (data) => this.offerings.set(data),
      error: (err) => console.error('Failed to load offerings', err),
    });

    this.experienceService.getExperience().subscribe({
      next: (data) => this.experience.set(data),
      error: (err) => console.error('Failed to load experience', err),
    });

    this.clientsService.getClients().subscribe({
      next: (data) => this.clients.set(data),
      error: (err) => console.error('Failed to load clients', err),
    });
  }
}
