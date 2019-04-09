import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthTokenToRequest(req)).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.router.navigate(['forbidden']);
        }
        return throwError(error);
      })
    );
  }

  private addAuthTokenToRequest(req: HttpRequest<any>): HttpRequest<any> {
    const authReq = req.clone({
      headers: req.headers.set('authorization', this.cookie.get('TOKEN'))
    });
    return authReq;
  }

}
