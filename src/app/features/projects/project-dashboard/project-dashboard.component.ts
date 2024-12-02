import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewProjectDialogComponent } from '../components/new-project-dialog/new-project-dialog.component';

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  progress: number;
}

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Projects Dashboard</h1>
        <button mat-raised-button color="primary" (click)="openNewProjectDialog()">
          <mat-icon>add</mat-icon>
          Add New Project
        </button>
      </div>
      
      <div class="projects-grid">
        <mat-card 
          *ngFor="let project of mockProjects" 
          class="project-card mat-elevation-z2"
          (click)="navigateToProject(project.id)"
          [style.cursor]="'pointer'"
        >
          <mat-card-header>
            <mat-card-title>{{ project.title }}</mat-card-title>
            <mat-card-subtitle>Status: {{ project.status }}</mat-card-subtitle>
          </mat-card-header>
          
          <mat-card-content>
            <p>{{ project.description }}</p>
            <div class="progress-info">
              <span>Progress: {{ project.progress }}%</span>
            </div>
          </mat-card-content>
          
          <mat-card-actions>
            <button mat-button color="primary" (click)="navigateToProject(project.id); $event.stopPropagation();">
              <mat-icon>visibility</mat-icon>
              View Details
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 24px;
      max-width: 1800px;
      margin: 0 auto;
      min-height: calc(100vh - 64px);
    }

    .dashboard-header {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dashboard-header h1 {
      font-size: 24px;
      font-weight: 500;
      margin: 0;
      color: rgba(0, 0, 0, 0.87);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      align-items: start;
    }

    .project-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .project-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .project-card mat-card-content {
      flex-grow: 1;
    }

    .progress-info {
      margin-top: 16px;
      color: rgba(0, 0, 0, 0.6);
    }

    mat-card-actions {
      padding: 16px;
      display: flex;
      justify-content: flex-start;
    }

    mat-icon {
      margin-right: 8px;
    }

    button mat-icon {
      margin-right: 8px;
    }
  `]
})
export class ProjectDashboardComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  openNewProjectDialog(): void {
    const dialogRef = this.dialog.open(NewProjectDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: Handle new project creation
        console.log('New project:', result);
        // Add the new project to the list
        // You'll want to dispatch an action to create the project in your backend
      }
    });
  }

  navigateToProject(projectId: number): void {
    this.router.navigate(['/projects', projectId, 'overview']);
  }

  // Mock data - replace with real data from service later
  mockProjects: Project[] = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A strategic initiative focused on infrastructure development and system optimization.',
      status: 'In Progress',
      progress: 45
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Implementation of new security protocols and compliance measures.',
      status: 'Planning',
      progress: 15
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Customer experience enhancement through digital transformation.',
      status: 'On Hold',
      progress: 60
    },
    {
      id: 4,
      title: 'Project Delta',
      description: 'Research and development of innovative solutions for emerging markets.',
      status: 'Active',
      progress: 30
    },
    {
      id: 5,
      title: 'Project Epsilon',
      description: 'Modernization of legacy systems and data migration.',
      status: 'In Review',
      progress: 75
    }
  ];
}
