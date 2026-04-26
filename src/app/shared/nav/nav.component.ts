import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="w-full bg-white border-b border-gray-200 px-4 py-3">
      <div class="max-w-xl mx-auto flex items-center gap-6">
        <a
          routerLink="/"
          class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          routerLinkActive="text-gray-900 font-semibold"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          Home
        </a>
        <a
          routerLink="/about"
          class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          routerLinkActive="text-gray-900 font-semibold"
        >
          About
        </a>
        <a
          routerLink="/privacy"
          class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          routerLinkActive="text-gray-900 font-semibold"
        >
          Privacy
        </a>
      </div>
    </nav>
  `,
})
export class NavComponent {}
