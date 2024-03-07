import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;
  constructor() {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }


  public setLoggedIn(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  public isAthenticated() {
    const token = window.sessionStorage.getItem(TOKEN_KEY) || window.localStorage.getItem(TOKEN_KEY)
    return token
  }

  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear(); 
    this.setLoggedIn(false);
  }


  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(TOKEN_KEY, token); 
    this.setLoggedIn(true);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY) || window.localStorage.getItem(USER_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.localStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, USER_KEY);
    window.localStorage.setItem(USER_KEY, USER_KEY); 
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY) || window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
