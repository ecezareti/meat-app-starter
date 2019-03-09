import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any): any {
    let errorMessage: string;

    if (error instanceof HttpErrorResponse) {
      errorMessage = error.error;
    } else {
      errorMessage = error.toString();
    }

    console.log(errorMessage);

    return Observable.throw(errorMessage);
  }
}
