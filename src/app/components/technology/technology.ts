import { Component, input } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology {
  readonly name = input.required<string>();
  readonly experience = input<string>();

  private readonly techIcon: Record<string, string> = {
    'JavaScript': 'bg-yellow-500/10 text-yellow-400',
    'TypeScript': '/images/typescript-logo.webp',
    'React': '/images/react-logo.png',
    'Node.JS': '/images/node-logo.png',
    'Python': '/images/python-logo.png',
    'C# .NET': '/images/dotnet-logo.png',
    'React Native': '/images/react-logo.png',
    'MS SQL Server': '/images/ms-sql-logo.png',
    '.NET': 'bg-purple-500/10 text-purple-400',
    'NestJS': '/images/nestjs-logo.svg',
  };

  getIcon(tech: string): string {
    return this.techIcon[tech] ?? ''
  }
}
