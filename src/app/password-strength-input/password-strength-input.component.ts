import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-strength-input',
  templateUrl: './password-strength-input.component.html',
  styleUrls: ['./password-strength-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordStrengthInputComponent),
    multi: true
  }]
})
export class PasswordStrengthInputComponent implements ControlValueAccessor {
  passwordControl = new FormControl();
  strengthColor: string[] = ['grey', 'grey', 'grey'];
  passwordVisible = false;

  private onChange: (value: any) => void = () => {};

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.passwordControl.valueChanges.subscribe((val) => {
      const strength = this.passwordStrengthService.checkPasswordStrength(val);
      this.onChange(strength);
    })
  }

  writeValue(obj: any): void {
    this.passwordControl.setValue(obj);
  }

  updatePasswordStrength(obj: any) {
    const strength = this.passwordStrengthService.checkPasswordStrength(obj);
    this.strengthColor = strength;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
