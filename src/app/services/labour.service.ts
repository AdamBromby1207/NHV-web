import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Labour, CreateLabourDto, UpdateLabourDto } from '../models/labour.model';

@Injectable({
  providedIn: 'root'
})
export class LabourService extends BaseApiService {
  private endpoint = 'api/labour';

  constructor(http: HttpClient) {
    super(http);
  }

  getLabourEntries(): Observable<Labour[]> {
    return this.get<Labour[]>(this.endpoint);
  }

  getLabourEntry(id: string): Observable<Labour> {
    return this.get<Labour>(`${this.endpoint}/${id}`);
  }

  getLabourByProject(projectId: string): Observable<Labour[]> {
    return this.get<Labour[]>(`${this.endpoint}/project/${projectId}`);
  }

  getLabourByJob(jobId: string): Observable<Labour[]> {
    return this.get<Labour[]>(`${this.endpoint}/job/${jobId}`);
  }

  createLabourEntry(labour: CreateLabourDto): Observable<Labour> {
    return this.post<Labour>(this.endpoint, labour);
  }

  updateLabourEntry(labour: UpdateLabourDto): Observable<Labour> {
    return this.put<Labour>(`${this.endpoint}/${labour.id}`, labour);
  }

  deleteLabourEntry(id: string): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }
}