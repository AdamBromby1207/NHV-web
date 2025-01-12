import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

interface DocumentType {
  id: string;
  name: string;
}

@Component({
  selector: 'app-document-upload-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  template: `
    <h2 mat-dialog-title>Upload Document</h2>
    <mat-dialog-content>
      <div class="upload-form">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Document Type</mat-label>
          <mat-select [(ngModel)]="selectedDocType" required>
            <mat-option *ngFor="let type of documentTypes" [value]="type">
              {{type.name}}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="!selectedDocType">Document type is required</mat-error>
        </mat-form-field>

        <div class="file-upload-container">
          <input
            type="file"
            #fileInput
            style="display: none"
            (change)="onFileSelected($event)"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
          >
          <div class="upload-box" 
               [class.has-file]="selectedFile"
               (click)="fileInput.click()"
               (dragover)="onDragOver($event)"
               (dragleave)="onDragLeave($event)"
               (drop)="onDrop($event)">
            <mat-icon class="upload-icon">cloud_upload</mat-icon>
            <span *ngIf="!selectedFile">
              Drag and drop a file here or click to select
            </span>
            <span *ngIf="selectedFile">
              Selected: {{selectedFile.name}}
            </span>
          </div>
          <small class="file-hint">
            Supported file types: PDF, DOC, DOCX, XLS, XLSX (Max size: 10MB)
          </small>
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button 
        mat-raised-button 
        color="primary" 
        [disabled]="!selectedFile || !selectedDocType"
        (click)="onUpload()">
        Upload
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .upload-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 400px;
      padding: 16px 0;
    }

    .file-upload-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .upload-box {
      border: 2px dashed #ccc;
      border-radius: 4px;
      padding: 24px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: #fafafa;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .upload-box:hover {
      border-color: #2196F3;
      background: #f0f7ff;
    }

    .upload-box.has-file {
      border-color: #4CAF50;
      background: #f1f8e9;
    }

    .upload-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #757575;
    }

    .file-hint {
      color: rgba(0, 0, 0, 0.6);
      margin-top: 4px;
    }

    mat-dialog-actions {
      padding: 16px 0;
    }
  `]
})
export class DocumentUploadDialogComponent {
  selectedDocType: DocumentType | null = null;
  selectedFile: File | null = null;

  documentTypes: DocumentType[] = [
    { id: 'project', name: 'Project Document' },
    { id: 'health-safety', name: 'Health & Safety Document' },
    { id: 'technical', name: 'Technical Document' },
    { id: 'quality', name: 'Quality Document' },
    { id: 'contract', name: 'Contract Document' }
  ];

  constructor(
    private dialogRef: MatDialogRef<DocumentUploadDialogComponent>
  ) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && this.isValidFile(file)) {
      this.selectedFile = file;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.remove('dragover');
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (this.isValidFile(file)) {
        this.selectedFile = file;
      }
    }
  }

  isValidFile(file: File): boolean {
    const validTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!validTypes.includes(fileExtension)) {
      alert('Invalid file type. Please upload a PDF, DOC, DOCX, XLS, or XLSX file.');
      return false;
    }
    
    if (file.size > maxSize) {
      alert('File is too large. Maximum size is 10MB.');
      return false;
    }
    
    return true;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onUpload() {
    if (this.selectedFile && this.selectedDocType) {
      // Here you would implement the actual file upload logic
      console.log('Uploading file:', this.selectedFile);
      console.log('Document type:', this.selectedDocType);
      
      // Close dialog after successful upload
      this.dialogRef.close({
        file: this.selectedFile,
        documentType: this.selectedDocType
      });
    }
  }
}
