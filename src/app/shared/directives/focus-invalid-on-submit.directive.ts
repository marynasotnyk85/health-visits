import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Directive({
  selector: 'form[appFocusInvalidOnSubmit]',
  standalone: true,
})
export class FocusInvalidOnSubmitDirective {
  private host = inject(ElementRef<HTMLFormElement>);
  private formGroupDir = inject(FormGroupDirective);
  private announcer = inject(LiveAnnouncer);

  @Input() a11yInvalidMessage =
    'Form has errors. Review the highlighted fields.';

  @HostListener('ngSubmit')
  onSubmit() {
    const selector = [
      '[formControlName].ng-invalid',
      'input.ng-invalid',
      'textarea.ng-invalid',
      'select.ng-invalid',
      '[aria-invalid="true"]',
    ].join(',');

    const form = this.formGroupDir.form;
    if (!form) return;

    if (form.invalid) {
      form.markAllAsTouched();
      this.announcer.announce(this.a11yInvalidMessage, 'assertive');

      queueMicrotask(() => {
        const root = this.host.nativeElement;

        const firstInvalid = root.querySelector(selector) as HTMLElement | null;
        firstInvalid?.focus();
      });
    }
  }
}
