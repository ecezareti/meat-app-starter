import { User } from './../../security/login/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'mt-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  lastUrl: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => this.lastUrl = e.url);
  }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user;
  }

  login(): void {
    this.loginService.handleLogin(this.lastUrl);
  }

  logout(): void {
    this.loginService.logout();
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}
