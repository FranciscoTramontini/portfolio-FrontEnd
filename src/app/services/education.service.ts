import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})

export class EducationService {

  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/education/all`);
  }

  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiServerUrl}/education/add`, education);
  }

  public updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiServerUrl}/education/update`, education);
  }

  public deleteEducation(educationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/education/delete/${educationId}`);
  }
}
