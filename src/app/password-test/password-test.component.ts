import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  styleUrls: ['./password-test.component.css']
})
export class PasswordTestComponent {
  form = this.fb.group({
    colors: [[''], Validators.required]
  });

  constructor(private fb: FormBuilder) { }
}
