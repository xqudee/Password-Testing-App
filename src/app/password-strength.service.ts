import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): string[] {
    const length = password.length;

    if (length == 0) {
      return ['grey', 'grey', 'grey'];
    } 
    else if (length < 8) {
      return ['red', 'red', 'red'];
    } 
    else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /[0-9]/.test(password);
      const hasSymbols = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password);
  
      if (hasLetters && hasSymbols && hasDigits) return ['green', 'green', 'green'];
      else if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) return ['yellow', 'yellow', 'grey'];
      else if (hasLetters || hasDigits || hasSymbols) return ['red', 'grey', 'grey'];
    }

    return ['grey', 'grey', 'grey'];
  }
}
