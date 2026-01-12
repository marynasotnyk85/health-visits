import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { Visit, Department } from '../../visits.models';
import { FocusInvalidOnSubmitDirective } from '../../../../shared/directives/focus-invalid-on-submit.directive';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { VisitService } from '../../visits.service';

@Component({
  selector: 'app-visit-create-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    FocusInvalidOnSubmitDirective,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './visit-create-page.component.html',
  styleUrl: './visit-create-page.component.scss',
})
export class VisitCreatePageComponent {
  private fb = inject(FormBuilder);
  private visits = inject(VisitService);
  private router = inject(Router);

  departments: Department[] = [
    'General',
    'Cardiology',
    'Pediatrics',
    'Dermatology',
  ];

  form = this.fb.group({
    date: ['', Validators.required],
    doctorName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(80)],
    ],
    department: ['General' as Department, Validators.required],
    reason: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(120)],
    ],
    notes: ['', [Validators.maxLength(1000)]],
  });

  save() {
    if (this.form.invalid) return;

    const v = this.form.getRawValue();
    const visit: Visit = {
      id: crypto.randomUUID(),
      dateIso: new Date(v.date!).toISOString(),
      doctorName: v.doctorName!.trim(),
      department: v.department!,
      reason: v.reason!.trim(),
      notes: (v.notes ?? '').trim(),
    };

    this.visits.add(visit);
    this.router.navigateByUrl('/visits');
  }
}
