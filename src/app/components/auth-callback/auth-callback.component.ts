import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-auth-callback',
  template: '<div>Loading...</div>',
  standalone: true
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // First check if we're already authenticated
    this.auth.isAuthenticated$.pipe(take(1)).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        // If already authenticated, just redirect to projects
        this.router.navigate(['/projects']);
        return;
      }

      // Otherwise handle the callback
      this.auth.handleRedirectCallback().subscribe({
        next: (result) => {
          // Get the intended destination from appState, or use default
          const targetUrl = result.appState?.target || '/projects';
          this.router.navigate([targetUrl]);
        },
        error: (error) => {
          console.error('Auth callback error:', error);
          this.router.navigate(['/']);
        }
      });
    });
  }
}
