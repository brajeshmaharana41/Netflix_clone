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
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
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
              if (res.body.customer_data.subscription_status) {
                this._router.navigate(['in/profile'])
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
