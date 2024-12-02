import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="overview-container">
      <mat-card class="info-card">
        <mat-card-header>
          <mat-card-title>Project Information</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="info-grid">
            <div class="info-item">
              <label>Status</label>
              <span>In Progress</span>
            </div>
            <div class="info-item">
              <label>Start Date</label>
              <span>Jan 1, 2024</span>
            </div>
            <div class="info-item">
              <label>End Date</label>
              <span>Dec 31, 2024</span>
            </div>
            <div class="info-item">
              <label>Project Manager</label>
              <span>John Doe</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="description-card">
        <mat-card-header>
          <mat-card-title>Description</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            This is a sample project description. It will be replaced with actual project data
            once connected to the backend service.
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .overview-container {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .info-card, .description-card {
      height: 100%;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .info-item label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-item span {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.87);
    }
  `]
})
export class ProjectOverviewComponent {
  // TODO: Add project data service integration
}
