import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InService } from '../in.service';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { Constants } from 'src/app/shared/constants/constant';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-email-password',
  templateUrl: './forgot-email-password.component.html',
  styleUrls: ['./forgot-email-password.component.scss'],
})
export class ForgotEmailPasswordComponent implements OnInit {
  passwordResetByEmail = true;
  form: FormGroup | undefined;
  errorMsg = '';
  constructor(
    private _router: Router,
    private _inSevice: InService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

      // productList: this.formBuilder.array([this.productListGroup()])
    });
  }

  onSubmit() {
    // console.log(this.form.controls['email'].valid);
    if (this.passwordResetByEmail) {
      if (this.form.controls['email'].valid) {
        this.forgotPasswordRequestAPI(this.form.value.email);
      }
    } else {
      if (this.form.controls['phone'].valid) {
        this.forgotPasswordRequestAPI(this.form.value.phone);
      }
    }
  }

  forgotPasswordRequestAPI(user_name: string) {
    this._inSevice.forgotPasswordRequest(user_name).subscribe({
      next: (res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          // go to email/sms sent page
          if (this.passwordResetByEmail) {
            this._router.navigate(['in/info/email']);
          } else {
            localStorage.setItem(Constants.FORGOTPASSWORDPHONE, user_name);
            this._router.navigate(['in/info/phone']);
          }
        } else if (res.status === Constants.SUCCESSSTATUSCODE2) {
          this.errorMsg = res.message;
          // go to phone otp page
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
  }
  gotoLogoutPage() {
    this._router.navigate(['in/signout']);
  }
}
