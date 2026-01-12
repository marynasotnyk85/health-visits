import { Component } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  standalone: true,
  template: `<a class="skip-link" href="#main-content">Skip to main content</a>`,
  styles: [`
    .skip-link{
      position:absolute; left:-999px; top:0;
      background:#fff; padding:8px 12px; z-index:1000;
    }
    .skip-link:focus{ left:8px; top:8px; outline:2px solid currentColor; }
  `]
})
export class SkipLinkComponent {}
