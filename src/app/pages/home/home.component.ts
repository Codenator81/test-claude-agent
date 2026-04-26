import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-24 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <span class="inline-block bg-indigo-500/20 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-500/30">
          Powered by Claude AI
        </span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Modern Angular App
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Built by AI
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          A demonstration of AI-driven development using Angular 17, Tailwind CSS, and Claude —
          responding to GitHub issues and building features end-to-end.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            routerLink="/about"
            class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-indigo-500/25"
          >
            Learn More
          </a>
          <a
            href="https://github.com/Codenator81/test-claude-agent"
            target="_blank"
            rel="noopener"
            class="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-4">What's Inside</h2>
        <p class="text-center text-gray-500 mb-14 max-w-xl mx-auto">
          This project showcases a modern Angular application structure with clean architecture and best practices.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (feature of features; track feature.title) {
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" [class]="feature.iconBg">
                <span class="text-2xl">{{ feature.icon }}</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-white">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to explore?</h2>
        <p class="text-gray-500 mb-8">Find out more about this project and how it was built.</p>
        <a
          routerLink="/about"
          class="inline-block bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
        >
          About the Project
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent {
  features = [
    {
      icon: '⚡',
      iconBg: 'bg-yellow-50',
      title: 'Angular 17+',
      description: 'Built with the latest Angular using standalone components, signals, and lazy loading.',
    },
    {
      icon: '🎨',
      iconBg: 'bg-blue-50',
      title: 'Tailwind CSS',
      description: 'Fully styled with Tailwind utility classes — no custom CSS, mobile-first design.',
    },
    {
      icon: '🤖',
      iconBg: 'bg-purple-50',
      title: 'AI-Powered',
      description: "Every feature is implemented by Claude, Anthropic's AI, responding to GitHub issues.",
    },
  ];
}
