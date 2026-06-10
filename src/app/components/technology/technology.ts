import { Component, input } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology {
  readonly icon = input.required<string>();
  readonly name = input.required<string>();
  readonly experience = input.required<string>();
}
