import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="flex items-center gap-2 font-bold text-xl text-white hover:text-indigo-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>TestAgent</span>
          </a>
          <nav class="flex items-center gap-1">
            <a
              routerLink="/"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLinkActive="bg-slate-700 text-white"
              class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              routerLink="/about"
              routerLinkActive="bg-slate-700 text-white"
              class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              routerLink="/privacy"
              routerLinkActive="bg-slate-700 text-white"
              class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
