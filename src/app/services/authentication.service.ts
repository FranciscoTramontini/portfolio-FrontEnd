import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user'
import { LoginUser } from '../models/login-user';
import { JwtDTO } from '../models/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  url = environment.apiAuthUrl;

  constructor(private httpClient: HttpClient) { }

  public neww(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.url + 'login', loginUser);
  }
}
