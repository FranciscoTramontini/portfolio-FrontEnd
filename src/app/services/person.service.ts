import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiServerUrl}/user/all`);
  }

  public updateUser(user: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiServerUrl}/user/update`, user);
  }
}
