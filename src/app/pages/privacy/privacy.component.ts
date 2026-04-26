import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="min-h-screen flex items-center justify-center px-4 py-12">
      <article class="max-w-xl w-full">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          This is placeholder text for the privacy policy. We are committed to protecting your
          personal information and your right to privacy. This policy describes how we collect,
          use, and share information about you when you use our services. We may update this
          policy from time to time, so please check back periodically for any changes.
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
export class PrivacyComponent {}
