import { Component, inject } from '@angular/core';
import { A11yRouteService } from './core/a11y/a11y-route.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SkipLinkComponent } from './core/layout/skip-link/skip-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    SkipLinkComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private a11yRoute = inject(A11yRouteService);

  ngOnInit() {
    this.a11yRoute.init();
  }
}
