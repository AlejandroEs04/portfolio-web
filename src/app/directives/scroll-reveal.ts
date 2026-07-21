import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  host: {
    class: 'animate-on-scroll',
  },
})
export class ScrollReveal implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  readonly appScrollReveal = input(0, { transform: (value: unknown) => Number(value) || 0 });

  ngAfterViewInit() {
    const element = this.el.nativeElement;
    const delay = this.appScrollReveal();
    if (delay) {
      element.style.transitionDelay = `${delay}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('revealed');
            this.observer?.unobserve(element);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
