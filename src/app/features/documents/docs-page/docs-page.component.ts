import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DocumentUploadDialogComponent } from '../../../shared/document-upload-dialog/document-upload-dialog.component';

interface DocumentCategory {
  id: string;
  name: string;
  path: string;
}

@Component({
  selector: 'app-docs-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="docs-container">
      <mat-sidenav-container>
        <mat-sidenav mode="side" opened class="category-nav">
          <div class="nav-header">
            <h3 matSubheader>Document Categories</h3>
            <button 
              mat-mini-fab 
              color="primary"
              (click)="showUploadDialog()">
              <mat-icon>upload</mat-icon>
            </button>
          </div>
          
          <mat-nav-list>
            <a mat-list-item 
               *ngFor="let category of documentCategories"
               [routerLink]="[category.path]"
               routerLinkActive="active-link">
              {{ category.name }}
            </a>
          </mat-nav-list>
        </mat-sidenav>
        
        <mat-sidenav-content class="content-area">
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .docs-container {
      height: calc(100vh - 150px);
      margin: -24px;
    }
    
    mat-sidenav-container {
      height: 100%;
    }
    
    .category-nav {
      width: 250px;
      background-color: #f5f5f5;
    }
    
    .nav-header {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
    
    .nav-header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.54);
    }
    
    .content-area {
      padding: 24px;
    }
    
    .active-link {
      background-color: rgba(0, 0, 0, 0.04);
      color: #1976d2;
    }
  `]
})
export class DocsPageComponent {
  documentCategories: DocumentCategory[] = [
    { id: 'project', name: 'Project Documents', path: 'project' },
    { id: 'health-safety', name: 'H&S Documents', path: 'health-safety' },
    { id: 'technical', name: 'Technical Queries', path: 'technical' }
  ];

  constructor(private dialog: MatDialog) {}

  showUploadDialog() {
    const dialogRef = this.dialog.open(DocumentUploadDialogComponent, {
      width: '500px',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the uploaded file and document type
        console.log('Upload result:', result);
      }
    });
  }
}
