import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, switchMap, catchError, throwError } from 'rxjs';
import { User } from '../store/state/user.state';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {
  private readonly API_PATH = 'users';

  constructor(
    http: HttpClient,
    private auth: AuthService
  ) {
    super(http);
  }

  private async getAuthHeaders(): Promise<HttpHeaders> {
    const token = await this.auth.getAccessTokenSilently().toPromise();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getUsers(): Observable<User[]> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => this.http.get<User[]>(`${this.apiUrl}/${this.API_PATH}`, { headers }))
    );
  }

  getUser(id: string): Observable<User> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => this.http.get<User>(`${this.apiUrl}/${this.API_PATH}/${id}`, { headers }))
    );
  }

  getUserByAuth0Id(auth0Id: string): Observable<User> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => this.http.get<User>(`${this.apiUrl}/${this.API_PATH}/auth0/${auth0Id}`, { headers }))
    );
  }

  createUser(userData: Partial<User>): Observable<User> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => 
        this.http.post<User>(`${this.apiUrl}/${this.API_PATH}/auth0`, userData, { headers })
      ),
      catchError(error => {
        console.error('User creation error:', error);
        return throwError(() => new Error(error.message || 'Failed to create user'));
      })
    );
  }

  updateUser(id: string, changes: Partial<User>): Observable<User> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => this.http.put<User>(`${this.apiUrl}/${this.API_PATH}/${id}`, changes, { headers }))
    );
  }

  deleteUser(id: string): Observable<void> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => this.http.delete<void>(`${this.apiUrl}/${this.API_PATH}/${id}`, { headers }))
    );
  }

  getOrCreateUser(userData: Partial<User>): Observable<User> {
    return from(this.getAuthHeaders()).pipe(
      switchMap(headers => this.http.post<User>(`${this.apiUrl}/${this.API_PATH}/auth0`, userData, { headers }))
    );
  }
}