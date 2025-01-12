import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewProjectDialogComponent } from '../components/new-project-dialog/new-project-dialog.component';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

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
          *ngFor="let project of projects" 
          class="project-card mat-elevation-z2"
          (click)="navigateToProject(project.id)"
          [style.cursor]="'pointer'"
        >
          <mat-card-header>
            <mat-card-title>{{ project.name }}</mat-card-title>
          </mat-card-header>
          
          <mat-card-content>
            <p>{{ project.description }}</p>
            <div class="project-dates">
              <div *ngIf="project.startDate">Start: {{ project.startDate | date }}</div>
              <div *ngIf="project.endDate">End: {{ project.endDate | date }}</div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 24px;
    }
    
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .project-card {
      height: 100%;
      transition: transform 0.2s;
    }
    
    .project-card:hover {
      transform: translateY(-4px);
    }
    
    mat-card-content {
      margin-top: 16px;
    }
    
    .project-dates {
      margin-top: 10px;
      color: rgba(0, 0, 0, 0.6);
    }
    
    .project-budget {
      margin-top: 10px;
      font-weight: bold;
    }
  `]
})
export class ProjectDashboardComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  openNewProjectDialog(): void {
    const dialogRef = this.dialog.open(NewProjectDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProjects();
      }
    });
  }

  navigateToProject(id: string): void {
    this.router.navigate(['/projects', id, 'overview']);
  }
}
