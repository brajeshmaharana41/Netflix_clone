import { Injectable } from '@angular/core';
import { HttpHandlerService } from '../shared/service/httphandler.service';
import { API } from '../shared/constants/api';
import { Observable } from 'rxjs';
import { SignUp, SignUpResponse } from '../shared/type/signup.type';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private _http: HttpHandlerService) {}

  signUp(user_name: string, password: string): Observable<SignUpResponse> {
    return this._http.post(API.Customer.signupSuccess, {
      user_name,
      password,
      source: 'direct',
      device_name: 'web',
      device_token: '123456',
    });
  }


  signUpOTPVerify(user_name:string,otp:string):Observable<any>{
    return this._http.post(API.Customer.signupOtpVerify, {
      user_name,
      otp,
    });
  }
}
