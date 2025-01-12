import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  template: `
    <div class="project-detail-container">
      <header class="project-header">
        <h1>{{ projectTitle }}</h1>
      </header>

      <nav mat-tab-nav-bar [tabPanel]="tabPanel">
        <a mat-tab-link
           *ngFor="let link of navLinks"
           [routerLink]="link.path"
           routerLinkActive #rla="routerLinkActive"
           [active]="rla.isActive">
          {{link.label}}
        </a>
      </nav>
      <div class="content-container">
        <mat-tab-nav-panel #tabPanel>
          <router-outlet></router-outlet>
        </mat-tab-nav-panel>
      </div>
    </div>
  `,
  styles: [`
    .project-detail-container {
      padding: 24px;
      max-width: 1800px;
      margin: 0 auto;
    }

    .project-header {
      margin-bottom: 24px;
    }

    .project-header h1 {
      font-size: 24px;
      font-weight: 500;
      margin: 0;
      color: rgba(0, 0, 0, 0.87);
    }

    :host ::ng-deep .mat-mdc-tab-links {
      background-color: white;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .content-container {
      margin-top: 16px;
      padding: 0 16px;
    }
  `]
})
export class ProjectPageComponent implements OnInit {
  projectTitle = 'Project Details'; // This should be loaded from your project service
  navLinks = [
    { path: 'overview', label: 'Overview' },
    { path: 'docs', label: 'Docs' },
    { path: 'chart', label: 'Chart' },
    { path: 'labour', label: 'Labour' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Ensure we're on a default tab
    this.route.children.length === 0 && this.router.navigate(['overview'], { relativeTo: this.route });
  }
}
