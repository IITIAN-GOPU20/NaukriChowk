import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/login.interface';
import { ServerService } from 'src/app/shared/services/server.service';
import { HTTP_METHOD } from 'src/app/shared/constants/httpMethod';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Register } from 'src/app/shared/models/register.interface';
import { UserService } from 'src/app/shared/services/user.service';


const AUTH_API_BASE_URL = 'auth/';
const AUTH_ENDPOINT = {
  LOGIN: 'login',
  REGISTER: 'register'
}


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor(private server: ServerService, private router: Router, private tokenStorage: TokenStorageService, private userService: UserService) { }


  login(user: Login) {
    if (user.email && user.password) {
      this.server.request(HTTP_METHOD.POST, AUTH_API_BASE_URL + AUTH_ENDPOINT.LOGIN, user)
        .subscribe((response: any) => {
          if (response.success && response.token) {
            this.tokenStorage.saveToken(response.token);
            this.tokenStorage.setLoggedIn(true);

            this.router.navigate(['/']);
          }
        }, error => {
          console.error('Login error:', error);

        });
    } else {

      console.error('Email and password are required.');
    }
  }

  register(user: Register) {

    if (user.email && user.name && user.phoneNumber && user.password && user.role) {
      this.server.request(HTTP_METHOD.POST, AUTH_API_BASE_URL + AUTH_ENDPOINT.REGISTER, user)
        .subscribe((response: any) => {
          if (response.success && response.token && response.user) {
            this.tokenStorage.saveToken(response.token);
            this.tokenStorage.setLoggedIn(true);
            this.userService.setUser(response.user)
            this.router.navigate(['/']);
          }
        }, error => {
          console.error('Registration error:', error);
        });
    } else {
      console.error('All fields are required.');
    }
  }


  logout() {
    this.tokenStorage.signOut()
    this.tokenStorage.setLoggedIn(false)
    this.userService.setUser(null)
    this.router.navigate(['/']);
  }
}
