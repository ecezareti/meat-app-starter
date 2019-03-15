import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(private notificationService: NotificationService, private injector: Injector, private zone: NgZone) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any): void {

    if (errorResponse instanceof HttpErrorResponse) {
      this.zone.run(() => {
        let httpError = errorResponse.status;

        switch (httpError) {
          case 401:
            this.injector.get(LoginService).handleLogin();
            break;

          case 403:
            this.notificationService.notify(errorResponse.error.message || 'Não autorizado');
            break;

          case 404:
            this.notificationService.notify(errorResponse.error.message || 'Recurso não encontrado');
            break;
        }
      });
    }

    super.handleError(errorResponse);
  }
}
