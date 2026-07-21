import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, QueryList, ViewChildren } from '@angular/core';

// Purely decorative parallax layer: blurred blobs/ribbons drift down at
// different speeds as the page scrolls. DOM is touched directly (outside
// Angular's zone, rAF-throttled) instead of through bindings so scrolling
// stays smooth and doesn't trigger change detection on every pixel.
@Component({
  selector: 'app-background-effects',
  imports: [],
  templateUrl: './background-effects.html',
  styleUrl: './background-effects.css',
})
export class BackgroundEffects implements AfterViewInit, OnDestroy {
  @ViewChildren('blob') private blobs!: QueryList<ElementRef<HTMLElement>>;

  private readonly speeds = [0.06, -0.2, -0.08, 0.16, 0.05, -0.1];
  private ticking = false;
  private boundOnScroll = () => this.queueUpdate();

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.boundOnScroll, { passive: true });
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.boundOnScroll);
  }

  private queueUpdate() {
    if (this.ticking) {
      return;
    }
    this.ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      this.blobs.forEach((blob, index) => {
        const el = blob.nativeElement;
        const speed = this.speeds[index % this.speeds.length];
        const rotate = el.dataset['rotate'];
        const rotatePart = rotate ? `rotate(${rotate}deg) ` : '';
        el.style.transform = `${rotatePart}translateY(${y * speed}px)`;
      });
      this.ticking = false;
    });
  }
}
