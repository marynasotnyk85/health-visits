import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';


import { Visit } from '../../visits.models';
import { VisitDetailsDialogComponent } from '../../components/visit-details-dialog/visit-details-dialog.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { VisitService } from '../../visits.service';

@Component({
  selector: 'app-visits-list-page',
  standalone: true,
  imports: [
    NgIf, NgFor, AsyncPipe, DatePipe,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './visits-list-page.component.html',
  styleUrl: './visits-list-page.component.scss'
})
export class VisitsListPageComponent {
private visitsService = inject(VisitService);
private dialog = inject(MatDialog);
private announcer = inject(LiveAnnouncer);

query = new FormControl('', { nonNullable: true});

visits$= this.visitsService.list();

 filtered$ = combineLatest([
    this.visits$,
    this.query.valueChanges.pipe(startWith(this.query.value))
  ]).pipe(
    map(([visits, q]) => {
      const term = q.trim().toLowerCase();
      const filtered = !term ? visits : visits.filter(v =>
        `${v.doctorName} ${v.department} ${v.reason}`.toLowerCase().includes(term)
      );

      queueMicrotask(() => this.announcer.announce(`${filtered.length} results`, 'polite'));
      return filtered;
    })
  );

  openDetails(visit: Visit) {
    this.dialog.open(VisitDetailsDialogComponent, {
        data: visit,
        autoFocus: true,
        restoreFocus: true,
        ariaLabel:'Visit details'
    })
  }

}