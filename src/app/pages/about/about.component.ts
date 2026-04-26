import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
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
      </article>
    </main>
  `,
})
export class AboutComponent {}
