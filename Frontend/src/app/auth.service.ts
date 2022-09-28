import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class AuthService {


  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }


  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  registerUser(user: any) {
    return this.http.post<any>("http://localhost:3000/register", { "user": user });
  }
  userLogin(user: any) {
    return this.http.post<any>("http://localhost:3000/userlogin", { "user": user });
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
  userloggedIn() {
    return !!localStorage.getItem('user');
  }
  getToken() {
    return localStorage.getItem('token')
  }
}