import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
}
)
export class LoginComponent {
  isDirty() {
    return true;
  }
} 