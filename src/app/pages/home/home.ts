import { Component, inject, OnInit, signal } from '@angular/core';
import { Technology } from '../../components/technology/technology';
import { RouterLink } from '@angular/router';
import { Project } from '../../components/project/project';
import { ProjectService } from '../../services/project.service';
import { Project as ProjectType } from '../../types';

@Component({
  selector: 'app-home',
  imports: [Technology, Project, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private projectService = inject(ProjectService);

  projects = signal<ProjectType[]>([]);

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects.set(data),
      error: (err) => console.error('Failed to load projects', err),
    });
  }
}
