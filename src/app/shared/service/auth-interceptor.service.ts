import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Constants } from '../constants/constant';
// import { Constants } from '../common/constant';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const config = {
      setHeaders: {
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        hgdh: 'hgj',
        Pragma: 'no-cache',
        Authorization: `Bearer ${localStorage.getItem(Constants.SESSIONTOKENSTRING)}`

      },
    };

    const newRequest = req.clone(config);
    return next.handle(newRequest).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
         if(event?.status == 401) {
          localStorage.clear();
          this.router.navigate(['/']);
         }
      }
      return event;
  }));;
  }
}
