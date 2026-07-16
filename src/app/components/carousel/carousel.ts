import { Component, input, signal } from '@angular/core';
import type { Image } from '../../types';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  readonly images = input.required<Image[]>();

  currentIndex = signal(0);

  next() {
    this.currentIndex.update(i => (i + 1) % this.images().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.images().length) % this.images().length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
