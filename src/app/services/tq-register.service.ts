import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { TqRegister, CreateTqRegisterDto, UpdateTqRegisterDto } from '../models/tq-register.model';

@Injectable({
  providedIn: 'root'
})
export class TqRegisterService extends BaseApiService {
  private endpoint = 'api/tqregister';

  constructor(http: HttpClient) {
    super(http);
  }

  getTqRegisters(): Observable<TqRegister[]> {
    return this.get<TqRegister[]>(this.endpoint);
  }

  getTqRegister(id: string): Observable<TqRegister> {
    return this.get<TqRegister>(`${this.endpoint}/${id}`);
  }

  getTqRegistersByProject(projectId: string): Observable<TqRegister[]> {
    return this.get<TqRegister[]>(`${this.endpoint}/project/${projectId}`);
  }

  getTqRegistersByJob(jobId: string): Observable<TqRegister[]> {
    return this.get<TqRegister[]>(`${this.endpoint}/job/${jobId}`);
  }

  getTqRegistersByAssignee(assigneeId: string): Observable<TqRegister[]> {
    return this.get<TqRegister[]>(`${this.endpoint}/assignee/${assigneeId}`);
  }

  createTqRegister(tqRegister: CreateTqRegisterDto): Observable<TqRegister> {
    return this.post<TqRegister>(this.endpoint, tqRegister);
  }

  updateTqRegister(tqRegister: UpdateTqRegisterDto): Observable<TqRegister> {
    return this.put<TqRegister>(`${this.endpoint}/${tqRegister.id}`, tqRegister);
  }

  deleteTqRegister(id: string): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }
}