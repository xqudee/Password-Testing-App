import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthInputComponent } from './password-strength-input/password-strength-input.component';
import { PasswordTestComponent } from './password-test/password-test.component';
import { PasswordStrengthMeterComponent } from './password-strength-meter/password-strength-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthInputComponent,
    PasswordTestComponent,
    PasswordStrengthMeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
