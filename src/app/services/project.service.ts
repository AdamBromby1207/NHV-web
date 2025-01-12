import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Project, CreateProjectDto, UpdateProjectDto } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseApiService {
  private endpoint = 'Project';  // Changed from 'projects' to match the API route

  constructor(http: HttpClient) {
    super(http);
  }

  getProjects(): Observable<Project[]> {
    return this.get<Project[]>(this.endpoint);
  }

  getProject(id: string): Observable<Project> {
    return this.get<Project>(`${this.endpoint}/${id}`);
  }

  createProject(project: CreateProjectDto): Observable<Project> {
    return this.post<Project>(this.endpoint, project);
  }

  updateProject(project: UpdateProjectDto): Observable<Project> {
    return this.put<Project>(`${this.endpoint}/${project.id}`, project);
  }

  deleteProject(id: string): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }
}