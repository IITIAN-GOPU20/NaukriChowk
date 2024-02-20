import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroupDirective, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordValidatorDirective, multi: true }]
})
export class ConfirmPasswordValidatorDirective implements Validator {
  @Input() passwordValue: string = "";

  constructor(private formGroupDirective: FormGroupDirective) {}

  validate(control: AbstractControl): ValidationErrors | null {
    // console.log("confirmControlName", this.passwordValue, control.value)


    if (this.passwordValue !== control.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
}
