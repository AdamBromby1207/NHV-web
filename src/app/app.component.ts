import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { UserActions } from './store/actions/user.actions';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="over" class="sidenav">
        <mat-nav-list>
          <a mat-list-item routerLink="/projects" (click)="sidenav.close()">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Projects</span>
          </a>
          <a mat-list-item routerLink="/users" (click)="sidenav.close()">
            <mat-icon matListItemIcon>people</mat-icon>
            <span matListItemTitle>User Management</span>
          </a>
          <a mat-list-item routerLink="/settings" (click)="sidenav.close()">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
          <!-- Add more navigation items as needed -->
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header [sidenav]="sidenav"></app-header>
        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .sidenav {
      width: 250px;
    }

    .main-content {
      padding: 20px;
      margin-top: 64px; /* Height of the toolbar */
    }

    mat-nav-list {
      padding-top: 0;
    }

    .mat-icon {
      margin-right: 8px;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(UserActions.checkAuth());
  }
}
