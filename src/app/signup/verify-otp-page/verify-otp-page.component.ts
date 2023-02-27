import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../shared/constants/constant';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AWSCognitoService } from 'src/app/shared/service/aws-cognito.service';
import { SignupService } from '../signup.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SignUpOTPVerify, SignUpResponse } from 'src/app/shared/type/signup.type';

@Component({
  selector: 'app-verify-otp-page',
  templateUrl: './verify-otp-page.component.html',
  styleUrls: ['./verify-otp-page.component.scss']
})
export class VerifyOtpPageComponent implements OnInit {
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  user = localStorage.getItem(Constants.USER);
  loader = false;
  errorMsg = '';
  // password = localStorage.getItem(Constants.ACTIVEPASSWORD);
  form: FormGroup | undefined;
  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
    private _signUpService: SignupService,
    private awsCognitoService: AWSCognitoService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        {value:this.email ? this.email : '',disabled:true},
        [
          Validators.required,
        ],
      ],
      password: [
        "",
        [
          Validators.required,
        ],
      ]
      // productList: this.formBuilder.array([this.productListGroup()])
    });
  }

  get formpassword() {
    return this.form.value.password;
  }

  get formemail() {
    return this.form.value.email;
  }
  onSubmit() {
    if (this.form.valid) {
      this.loader = true;
      this._signUpService
        .signUpOTPVerify(this.form.getRawValue().email, this.form.value.password)
        .subscribe({
          next: (res: SignUpOTPVerify) => {
            this.loader = false;
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              window.alert(res.message);
              this.goToPlanChoosePage();
            }else{
              window.alert(res.message);
            }
          },
          error: (err: HttpErrorResponse) => {
            this.loader = false;
            console.log(err.error);
          },
        });
    }
  }
  goToPlanChoosePage() {
    this._router.navigate(['signup/regform']);
  }
}
