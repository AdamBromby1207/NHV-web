import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { MasterDocument, CreateMasterDocumentDto, UpdateMasterDocumentDto } from '../models/master-document.model';

@Injectable({
  providedIn: 'root'
})
export class MasterDocRegisterService extends BaseApiService {
  private endpoint = 'api/masterdocumentregister';

  constructor(http: HttpClient) {
    super(http);
  }

  getMasterDocuments(): Observable<MasterDocument[]> {
    return this.get<MasterDocument[]>(this.endpoint);
  }

  getMasterDocument(id: string): Observable<MasterDocument> {
    return this.get<MasterDocument>(`${this.endpoint}/${id}`);
  }

  getMasterDocumentsByProject(projectId: string): Observable<MasterDocument[]> {
    return this.get<MasterDocument[]>(`${this.endpoint}/project/${projectId}`);
  }

  getMasterDocumentsByJob(jobId: string): Observable<MasterDocument[]> {
    return this.get<MasterDocument[]>(`${this.endpoint}/job/${jobId}`);
  }

  getMasterDocumentsByType(documentType: string): Observable<MasterDocument[]> {
    return this.get<MasterDocument[]>(`${this.endpoint}/type/${documentType}`);
  }

  createMasterDocument(document: CreateMasterDocumentDto): Observable<MasterDocument> {
    return this.post<MasterDocument>(this.endpoint, document);
  }

  updateMasterDocument(document: UpdateMasterDocumentDto): Observable<MasterDocument> {
    return this.put<MasterDocument>(`${this.endpoint}/${document.id}`, document);
  }

  deleteMasterDocument(id: string): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }
}