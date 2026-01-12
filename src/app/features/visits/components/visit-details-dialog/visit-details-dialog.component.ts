import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Visit } from '../../visits.models';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-visit-details-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DatePipe],
  templateUrl: './visit-details-dialog.component.html',
  styleUrl: './visit-details-dialog.component.scss'
})
export class VisitDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public visit: Visit) {}
}
