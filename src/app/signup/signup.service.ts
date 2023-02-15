import { Injectable } from '@angular/core';
import { HttpHandlerService } from '../shared/service/httphandler.service';
import { API } from '../shared/constants/api';
import { Observable } from 'rxjs';
import { SignUp } from '../shared/type/signup.type';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private _http: HttpHandlerService) {}

  signUp(signupDetails: SignUp) {
    return this._http.post(API.Customer.signupSuccess, signupDetails);
  }
}
