import { Injectable } from '@angular/core';
import { HttpHandlerService } from '../shared/service/httphandler.service';
import { API } from '../shared/constants/api';
import { Observable } from 'rxjs';
import { SignUp, SignUpResponse, SubscriptionResponse, UserSubscribeResponse } from '../shared/type/signup.type';
import { Constants } from '../shared/constants/constant';
// import { Constants } from '@aws-amplify/core';

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
      language: "English"
    });
  }


  signUpOTPVerify(user_name:string,otp:string):Observable<any>{
    return this._http.post(API.Customer.signupOtpVerify, {
      user_name,
      otp,
    });
  }

  getAllSubscription():Observable<SubscriptionResponse>{
    return this._http.get(API.User_Subscription.getAllSubscription,{Authorization:localStorage.getItem(Constants.SESSIONTOKENSTRING)});
  }


  userSubscribe(subscription_id:string,payment_method:string='UPI'):Observable<UserSubscribeResponse>{
    return this._http.post(API.Customer.signupOtpVerify, {
      subscription_id,
      payment_method,
    });
  }
}
