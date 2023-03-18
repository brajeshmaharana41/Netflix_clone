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
  hide = true;
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
        { value: this.email ? this.email : '', disabled: true },
        [Validators.required],
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
      this.loader = true;
      this._signUpService
        .signUp(this.form.getRawValue().email, this.form.value.password)
        .subscribe({
          next: (res: SignUpResponse) => {
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
              this.goToPlanChoosePage();
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
    this._router.navigate(['signup/choose-plan']);
  }
}
