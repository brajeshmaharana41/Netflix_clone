import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
// import { Constants } from '../common/constant';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

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
        // Authorization:
        //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWE4Y2ZlZDczZjkxMjExMGI0NzNiZSIsInVzZXJfdHlwZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBkaGFrYXJlY29yZC5jb20iLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2NTc2NzUzODcsImV4cCI6MTY2MDI2NzM4N30.yIHQuseechEwEGeP0hHUG8yy-6vE2xmA5x-N1Fxx6n0', //JSON.stringify(localStorage.getItem('serverToken')),
      },
    };

    const newRequest = req.clone(config);
    return next.handle(newRequest);
  }
}
