import { Router } from '@angular/router';
import { MEET_API } from 'app/app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable ()
export class LoginService {
  user: User;

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn (): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEET_API}/login`, { email: email, password: password })
      .do(user => this.user = user);
  }

  handleLogin(path?: string): any {
    this.router.navigate (['/login', path]);
  }

  logout(): any {
    this.user = undefined;
  }
}
