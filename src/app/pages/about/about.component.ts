import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="min-h-screen flex items-center justify-center px-4 py-12">
      <article class="max-w-xl w-full">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About this project
        </h1>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          This is an AI-built demo application created entirely by Claude, Anthropic's AI assistant.
          It showcases how AI can scaffold and implement a modern Angular application
          with Tailwind CSS styling, responding directly to GitHub issues.
        </p>
        <a
          routerLink="/"
          class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
          </svg>
          Back to home
        </a>
      </article>
    </main>
  `,
})
export class AboutComponent {}
