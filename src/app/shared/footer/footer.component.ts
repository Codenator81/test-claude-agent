import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-900 text-gray-400">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-2 font-bold text-white text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>TestAgent</span>
          </div>
          <nav class="flex flex-wrap justify-center gap-6 text-sm">
            <a routerLink="/" class="hover:text-white transition-colors">Home</a>
            <a routerLink="/about" class="hover:text-white transition-colors">About</a>
            <a routerLink="/privacy" class="hover:text-white transition-colors">Privacy</a>
          </nav>
          <p class="text-sm text-gray-500">&copy; 2026 TestAgent. Built with Angular &amp; Claude.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
