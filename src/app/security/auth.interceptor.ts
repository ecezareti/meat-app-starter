import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);

    if (loginService.isLoggedIn()) {
      let autRequest = request.clone({
        setHeaders: {
          'authorization': `Bearer ${loginService.user.accessToken}`
        }
      });

      return next.handle(autRequest);
    }

    return next.handle(request);
  }
}
