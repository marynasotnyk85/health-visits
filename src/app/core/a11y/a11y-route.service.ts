import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class A11yRouteService {
  private router = inject(Router);
  private announcer = inject(LiveAnnouncer);
  private title = inject(Title);

  init() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const main = document.getElementById('main-content');
        main?.focus();

        // Announce current page title for screen readers
        const pageTitle = this.title.getTitle() || 'Page';
        this.announcer.announce(pageTitle);
      });
  }
}
