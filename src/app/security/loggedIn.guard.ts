import { LoginService } from 'app/security/login/login.service';
import {
  CanLoad,
  Route,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService) {}

  canLoad(route: Route): boolean {
    console.log('canLoad');
    return this.isAuthenticated(route.path);
  }

  private isAuthenticated(path: string) {
    let isLoggeddIn = this.loginService.isLoggedIn();
    if (!isLoggeddIn) {
      this.loginService.handleLogin(path);
    }

    return isLoggeddIn;
  }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean {
    console.log('canActivate');
    return this.isAuthenticated(activatedRoute.routeConfig.path);
  }
}
