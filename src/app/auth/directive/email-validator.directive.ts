import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControlDirective, FormGroupDirective, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[authEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
  
})
export class EmailValidatorDirective implements Validator{
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { 'required': true };
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(control.value);
    return valid ? null : { 'invalidEmail': true };
  }

}
