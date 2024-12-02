import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="login-container">
      <div class="login-content">
        <img class="logo" src="assets/Northern-logo.png" alt="Northern HV">
        <button mat-raised-button (click)="login()" class="login-button">
          Sign In
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      background-color: black;
    }

    .login-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      margin: 0;
      padding: 0;
    }

    .login-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .logo {
      width: 300px;
      height: auto;
    }

    .login-button {
      padding: 1rem 3rem;
      font-size: 1.2rem;
      background-color: white;
      color: black;
    }

    .login-button:hover {
      background-color: #f0f0f0;
    }
  `]
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }
}
