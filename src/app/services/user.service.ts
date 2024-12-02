import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../store/state/user.state';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {
  private readonly API_PATH = 'users';

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers(): Observable<User[]> {
    return this.get<User[]>(this.API_PATH);
  }

  getUser(id: string): Observable<User> {
    return this.get<User>(`${this.API_PATH}/${id}`);
  }

  getUserByAuth0Id(auth0Id: string): Observable<User> {
    return this.get<User>(`${this.API_PATH}/auth0/${auth0Id}`);
  }

  getOrCreateUser(userData: Partial<User>): Observable<User> {
    return this.post<User>(`${this.API_PATH}/auth0`, userData);
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.post<User>(this.API_PATH, user);
  }

  updateUser(id: string, changes: Partial<User>): Observable<User> {
    return this.put<User>(`${this.API_PATH}/${id}`, changes);
  }

  deleteUser(id: string): Observable<void> {
    return this.delete<void>(`${this.API_PATH}/${id}`);
  }
}