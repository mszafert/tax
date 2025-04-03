import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  imports: [],
  template: `
    <footer class="mt-2 px-2">
      <p class="c-zinc-300 text-right text-sm">&copy; Copyright by Pixeye 2022 - {{ year() }}</p>
    </footer>
  `,
})
export class PageFooterComponent {
  readonly year = signal(new Date().getFullYear());
}
