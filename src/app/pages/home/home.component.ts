import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white py-24 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <span class="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6 border border-indigo-500/30">
          Modern Angular App
        </span>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Build amazing apps<br>
          <span class="text-indigo-400">faster than ever</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          A modern, production-ready Angular starter with Tailwind CSS, standalone components, and signals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/about"
             class="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
            Learn More
          </a>
          <a routerLink="/privacy"
             class="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all border border-white/20">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose this stack?</h2>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto">
            Built with the latest Angular features and best practices for a modern developer experience.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (feature of features; track feature.title) {
            <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.icon"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
              <p class="text-gray-500 leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gray-900 text-white">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p class="text-gray-400 text-lg mb-8">Explore the project and see what's possible.</p>
        <a routerLink="/about"
           class="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25">
          Explore Now
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent {
  protected readonly features = [
    {
      title: 'Angular 17+ Signals',
      description: 'Built with the latest Angular signals API for reactive, performant state management.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid, consistent, and fully customizable styling.',
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    },
    {
      title: 'Standalone Components',
      description: 'Modern Angular architecture without NgModules — simpler, tree-shakeable, and easier to reason about.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    },
  ];
}
