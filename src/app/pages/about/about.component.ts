import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="py-20 px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About this project
        </h1>
        <p class="text-lg text-gray-600 mb-6 leading-relaxed">
          This is an AI-built demo application created entirely by Claude, Anthropic's AI assistant.
          It showcases how AI can scaffold and implement a modern Angular application
          with Tailwind CSS styling, responding directly to GitHub issues.
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          Every route, component, and feature was implemented by Claude in response to
          issues filed in this repository — demonstrating autonomous end-to-end development.
        </p>
      </div>
    </section>
  `,
})
export class AboutComponent {}
