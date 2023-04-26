import { Injectable } from '@angular/core';
import { HttpHandlerService } from '../shared/service/httphandler.service';
import { API } from '../shared/constants/api';
import { Observable } from 'rxjs';
import {
  SignUp,
  SignUpResponse,
  SubscriptionResponse,
  UserSubscribeResponse,
} from '../shared/type/signup.type';
import { Constants } from '../shared/constants/constant';
// import { Constants } from '@aws-amplify/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  token;
  constructor(private _http: HttpHandlerService) {
    this.token = localStorage.getItem(Constants.SESSIONTOKENSTRING)
  }

  signUp(user_name: string, password: string): Observable<SignUpResponse> {
    return this._http.post(API.Customer.signupSuccess, {
      user_name,
      password,
      source: 'direct',
      device_name: 'web',
      device_token: '123456',
      language: 'English',
    });
  }

  signUpOTPVerify(user_name: string, otp: string): Observable<any> {
    return this._http.post(API.Customer.signupOtpVerify, {
      user_name,
      otp,
    });
  }

  getAllSubscription(): Observable<SubscriptionResponse> {
    return this._http.get(API.User_Subscription.getAllSubscription, {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTM3MjBjZmI1YjVlNDhmODk1ODRkMSIsImlhdCI6MTY3NTg1MDI1MiwiZXhwIjoxNzA3NDA3ODUyfQ.HDetEJkhghUmK2ikmh_QdoBzwSO2D9fPUJFUxNTjU5Y`,
    });
  }

  userSubscribe(
    subscription_id: string,
    payment_method: string = 'UPI'
  ): Observable<UserSubscribeResponse> {
    return this._http.post(API.Customer.signupOtpVerify, {
      subscription_id,
      payment_method,
    });
  }

  AddProfile(data) {
    return this._http.post(API.Customer.addProfile, data, {
      Authorization:
        `Bearer ${this.token}`,
    });
  }
}
