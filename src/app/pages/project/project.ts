import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import type { Project as ProjectType } from '../../types';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Carousel } from '../../components/carousel/carousel';
import { Technology } from '../../components/technology/technology';

@Component({
  selector: 'app-project',
  imports: [Carousel, Technology],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  private projectService = inject(ProjectService);
  private activatedRoute = inject(ActivatedRoute);

  projectId = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['projectId'] || '')
    ),
    { initialValue: '' }
  );

  project = toSignal<ProjectType | null>(
    this.activatedRoute.params.pipe(
      map(params => Number(params['projectId'])),
      switchMap(id => this.projectService.getProjectById(id))
    ),
    { initialValue: null }
  );

  hasMultipleImages = computed(() => (this.project()?.images?.length ?? 0) > 1);
  hasSingleImage = computed(() => (this.project()?.images?.length ?? 0) === 1);
  technologies = computed(() => this.project()?.projectTechnologies?.map(pt => pt.technology) ?? []);
  imageUrls = computed(() =>
    (this.project()?.images ?? []).map(img => ({
      ...img,
      url: `${environment.apiUrl}${img.url}`
    }))
  );
}
