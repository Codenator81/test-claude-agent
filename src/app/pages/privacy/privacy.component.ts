import { Component } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NavComponent],
  template: `
    <app-nav />
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
      </article>
    </main>
  `,
})
export class PrivacyComponent {}
