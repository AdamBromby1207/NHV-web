import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectCurrentUser } from '../../store/selectors/user.selectors';
import { UserActions } from '../../store/actions/user.actions';
import { User } from '../../store/state/user.state';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ],
  template: `
    <mat-toolbar *ngIf="isAuthenticated$ | async" class="header-toolbar mat-elevation-z6" [style.background-color]="'black'" [style.color]="'white'">
      <button mat-icon-button (click)="sidenav.toggle()" class="menu-button" [style.color]="'white'">
        <mat-icon style="color: white">menu</mat-icon>
      </button>

      <a mat-button routerLink="/" [style.color]="'white'">
        <img class="logo" src="assets/Northern-logo.png" alt="Northern HV">
      </a>
      
      <a mat-button routerLink="/projects" routerLinkActive="active" [style.color]="'white'">
        <mat-icon style="color: white">dashboard</mat-icon>
        <span class="nav-text">Projects</span>
      </a>

      <span class="spacer"></span>

      <div class="user-menu">
        <button mat-button [matMenuTriggerFor]="menu" class="user-button" [style.color]="'white'">
          <img *ngIf="(currentUser$ | async)?.picture"
               [src]="(currentUser$ | async)?.picture"
               class="avatar"
               [alt]="(currentUser$ | async)?.name || ''">
          <span class="username">{{ ((currentUser$ | async)?.given_name || ((currentUser$ | async)?.name || '').split(' ')[0]) }}</span>
          <mat-icon style="color: white">person</mat-icon>
        </button>
        
        <mat-menu #menu="matMenu">
          <button mat-menu-item routerLink="/users">
            <mat-icon style="color: white">people</mat-icon>
            <span style="color: white">User Management</span>
          </button>
          <button mat-menu-item routerLink="/settings">
            <mat-icon style="color: white">settings</mat-icon>
            <span style="color: white">Settings</span>
          </button>
          <mat-divider style="border-color: rgba(255,255,255,0.12)"></mat-divider>
          <button mat-menu-item (click)="logout()">
            <mat-icon style="color: white">exit_to_app</mat-icon>
            <span style="color: white">Logout</span>
          </button>
        </mat-menu>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .logo {   
      height: 40px;
      margin-right: 16px;
    }

    .active {
      background: rgba(255, 255, 255, 0.1) !important;
    }

    .user-menu {
      display: flex;
      align-items: center;
    }

    .user-button {
      display: flex;
      align-items: center;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .username {
      margin: 0 8px;
    }

    .menu-button {
      margin-right: 16px;
    }

    ::ng-deep .mat-mdc-menu-content {
      background-color: black;
    }

    ::ng-deep .mat-mdc-menu-item {
      color: white;
    }

    .nav-text {
      margin-left: 8px;
    }
  `]
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  
  isAuthenticated$: Observable<boolean>;
  currentUser$: Observable<User | null>;

  constructor(private store: Store) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  ngOnInit() {}

  logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
