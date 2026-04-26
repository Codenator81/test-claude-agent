import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  template: `
    <section class="py-20 px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p class="text-lg text-gray-600 mb-4 leading-relaxed">
          This is placeholder text for the privacy policy. We are committed to protecting your
          personal information and your right to privacy.
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          This policy describes how we collect, use, and share information about you when
          you use our services. We may update this policy from time to time, so please
          check back periodically for any changes.
        </p>
      </div>
    </section>
  `,
})
export class PrivacyComponent {}
