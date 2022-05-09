import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiServerUrl}/user/all`);
  }

  public updateUser(user: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiServerUrl}/user/update`, user);
  }
}
