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

  forgotPasswordRequest(user_name: string) {
    return this._http.post(API.Customer.forgotPassword, { user_name });
  }

  forgotPasswordOTPVerify(mobile: string, otp: string) {
    return this._http.post(API.Customer.forgotPasswordVerify, {
      mobile,
      otp,
      source: 'direct',
      device_name: 'web',
      device_token: '12345',
    });
  }

  forgotPasswordVerify(mobile: string, otp: string) {
    return this._http.post(API.Customer.forgotPasswordVerify, {
      mobile,
      otp,
      source: 'direct',
    });
  }

  forgotPasswordChange(mobile: string, email: string, new_password: string) {
    return this._http.post(API.Customer.forgotPasswordVerify, {
      mobile,
      email,
      new_password,
    });
  }
}
