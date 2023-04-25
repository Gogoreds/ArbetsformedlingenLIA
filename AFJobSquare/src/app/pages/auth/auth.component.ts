import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  authOption: string;

  constructor() {
    this.authOption = 'signInArbetssokande';
  }

  selectAuthOption(option: string): void {
    this.authOption = option;
  }
}
