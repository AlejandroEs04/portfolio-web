import { Component, inject, OnInit, signal } from '@angular/core';
import { Project } from '../../components/project/project';
import { ProjectService } from '../../services/project.service';
import { Project as ProjectType } from '../../types';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  private projectService = inject(ProjectService);

  projects = signal<ProjectType[]>([]);

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects.set(data),
      error: (err) => console.error('Failed to load projects', err),
    });
  }
}
