import { Routes } from '@angular/router';
import { VisitsListPageComponent } from './features/visits/pages/visits-list/visits-list-page.component';
import { VisitCreatePageComponent } from './features/visits/pages/visit-create/visit-create-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'visits' },
  { path: 'visits', component: VisitsListPageComponent, title: 'Visits' },
  { path: 'visits/new', component: VisitCreatePageComponent, title: 'Create visit' },
  { path: '**', redirectTo: 'visits' }
];
