import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Constants } from '../../shared/constants/constant';
import { InService } from '../in.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup | undefined;
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  user = localStorage.getItem(Constants.USER);
  errorMsg = '';
  // password = localStorage.getItem(Constants.ACTIVEPASSWORD);
  loader = false;
  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
    private _inService: InService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        this.email ? this.email : '',
        [
          Validators.pattern(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/),
          Validators.required,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ],
      ],
      // productList: this.formBuilder.array([this.productListGroup()])
    });
  }
  goToHomePage() {
    this._router.navigate(['home']);
  }

  get formValue() {
    return this.form.value;
  }
  submit() {
    // this._router.navigate(['in/profile'])
    if (this.form.valid) {
      this.loader = true;
      this._inService
        .signin(this.formValue.email, this.formValue.password)
        .subscribe({
          next: (res) => {
            this.loader = false;
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              localStorage.setItem(
                Constants.USER,
                JSON.stringify(res.body.customer_data)
              );
              localStorage.setItem(
                res.body.token,
                Constants.SESSIONTOKENSTRING
              );
              if (res.body.customer_data.subscription_status) {
                this._router.navigate(['in/profile']);
              } else {
                this.goToGetStartedPage();
              }
            } else if (res.status === Constants.SUCCESSSTATUSCODE2) {
              this.errorMsg = res.message;
              // wrong pass alert goes here.
            }
          },
          error: (err: HttpErrorResponse) => {
            this.loader = false;
            this.errorMsg = err.message;
            console.log(err.error);
          },
        });
    }
  }

  goToGetStartedPage() {
    this._router.navigate(['in/get-started']);
  }
  goTosignUpPage() {
    this._router.navigate(['']);
  }
  goToForgotPage() {
    this._router.navigate(['in/forgot-email']);
  }
}
