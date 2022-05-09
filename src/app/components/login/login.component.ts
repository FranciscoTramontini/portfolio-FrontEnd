import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUser!: LoginUser;
  nameUser!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  isLoading: boolean;

  constructor(
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
    ) { 
      this.isLoading = false;
    }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.nameUser, this.password);
    this.authService.login(this.loginUser).subscribe({
      next: (data) => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nameUser);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
      },
      error: (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.message;
      }
    });
  }
}
