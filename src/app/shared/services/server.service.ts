import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { AUTH_TOKEN_KEY } from '../constants/storageConstants';
const AUTH_API_BASE_URL = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class ServerService {


  // private token: string | null | undefined;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }


  request(method: string, route: string, data?: any) {
    if (method === 'GET') {
      return this.get(route, data);
    }
    this.tokenStorage.getToken()
    const header = (this.tokenStorage.isAthenticated()) ? { Authorization: `Bearer ${this.tokenStorage.getToken()}` } : undefined;

    return this.http.request(method, AUTH_API_BASE_URL + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });
  }

  get(route: string, data?: any) {
    const header = (this.tokenStorage.isAthenticated()) ? { Authorization: `Bearer ${this.tokenStorage.getToken()}` } : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(AUTH_API_BASE_URL + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }
}
