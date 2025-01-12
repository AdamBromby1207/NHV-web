import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-project-docs',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  template: `
    <div class="docs-list-container">
      <h2>Project Documents</h2>
      <!-- Add your document list/grid here -->
    </div>
  `,
  styles: [`
    .docs-list-container {
      padding: 16px;
    }
  `]
})
export class ProjectDocsComponent {}
