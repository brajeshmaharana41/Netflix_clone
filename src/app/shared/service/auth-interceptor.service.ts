import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Constants } from '../constants/constant';
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
        //   localStorage.getItem(Constants.SESSIONTOKENSTRING)
      },
    };

    const newRequest = req.clone(config);
    return next.handle(newRequest);
  }
}
