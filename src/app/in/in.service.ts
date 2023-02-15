import { Injectable } from '@angular/core';
import { HttpHandlerService } from '../shared/service/httphandler.service';
import {
  CustomerDetailsUpdate,
  CustomerDetailsUpdateResponse,
  Signin,
  SigninResponse,
  HttpResponse,
} from '../shared/type/in-type';
import { API } from '../shared/constants/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InService {
  constructor(private _http: HttpHandlerService) {}

  emailStatus(email: string): Observable<HttpResponse> {
    return this._http.post(API.Customer.signup, { email });
  }

  customerDetailsUpdate(
    customerDetails: CustomerDetailsUpdate
  ): Observable<CustomerDetailsUpdateResponse> {
    return this._http.post(API.Customer.customerDetailsUpdate, customerDetails);
  }

  signin(user_name: string, password: string): Observable<SigninResponse> {
    return this._http.post(API.Customer.signin, {
      user_name,
      password,
      source: 'direct',
      device_name: 'web',
      device_token: '123456',
    });
  }
}
