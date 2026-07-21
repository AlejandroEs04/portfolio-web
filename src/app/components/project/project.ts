import { Component, input } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-project',
  imports: [ScrollReveal],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  readonly name = input.required<string>();
  readonly description = input.required<string>();
  readonly technologies = input.required<string[]>();
  readonly id = input<string>();

  private readonly techColors: Record<string, string> = {
    'JavaScript': 'bg-yellow-500/10 text-yellow-400',
    'TypeScript': 'bg-blue-500/10 text-blue-400',
    'React': 'bg-cyan-500/10 text-cyan-400',
    'Node.JS': 'bg-green-500/10 text-green-400',
    'Python': 'bg-blue-500/10 text-blue-400',
    'C# .NET': 'bg-purple-500/10 text-purple-400',
    'React Native': 'bg-indigo-500/10 text-indigo-400',
    'MS SQL Server': 'bg-red-500/10 text-red-400',
    '.NET': 'bg-purple-500/10 text-purple-400',
  };

  getTechColor(tech: string): string {
    return this.techColors[tech] ?? 'bg-gray-500/10 text-gray-400';
  }
}
