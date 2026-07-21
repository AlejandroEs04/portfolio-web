import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BackgroundEffects } from './components/background-effects/background-effects';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, BackgroundEffects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
