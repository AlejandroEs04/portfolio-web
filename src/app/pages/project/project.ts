import { Component, signal, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projectId = signal('')

  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.projectId.set(params['projectId']);
    });
  }
}
