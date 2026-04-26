import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors">
            <svg class="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="text-xl font-bold tracking-tight">MyApp</span>
          </a>

          <nav class="hidden md:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="bg-indigo-600 text-white" [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all">
              Home
            </a>
            <a routerLink="/about" routerLinkActive="bg-indigo-600 text-white"
               class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all">
              About
            </a>
            <a routerLink="/privacy" routerLinkActive="bg-indigo-600 text-white"
               class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all">
              Privacy
            </a>
          </nav>

          <button (click)="toggleMenu()" class="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-all" aria-label="Toggle menu">
            @if (menuOpen()) {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            } @else {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            }
          </button>
        </div>

        @if (menuOpen()) {
          <nav class="md:hidden pb-4 flex flex-col gap-1">
            <a routerLink="/" routerLinkActive="bg-indigo-600 text-white" [routerLinkActiveOptions]="{exact: true}"
               (click)="closeMenu()"
               class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all">
              Home
            </a>
            <a routerLink="/about" routerLinkActive="bg-indigo-600 text-white"
               (click)="closeMenu()"
               class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all">
              About
            </a>
            <a routerLink="/privacy" routerLinkActive="bg-indigo-600 text-white"
               (click)="closeMenu()"
               class="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all">
              Privacy
            </a>
          </nav>
        }
      </div>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
