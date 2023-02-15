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
import { SignUpResponse } from 'src/app/shared/type/signup.type';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  password = localStorage.getItem(Constants.ACTIVEPASSWORD);
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
          Validators.minLength(6),
          Validators.maxLength(60),
        ],
      ],
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
      this._signUpService
        .signUp({
          email: this.form.value.email,
          password: this.form.value.password,
          source: 'direct',
          device_name: 'web',
          device_token: '63e3f10dca32b744942603ae',
        })
        .subscribe({
          next: (res: SignUpResponse) => {
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              localStorage.setItem(
                Constants.USER,
                JSON.stringify(res.body.customer_data)
              );
              localStorage.setItem(Constants.ACTIVEPASSWORD, '123456');
              this.goToPlanChoosePage();
            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err.error);
          },
        });
    }
  }
  goToPlanChoosePage() {
    this._router.navigate(['signup/choose-plan']);
  }
}
