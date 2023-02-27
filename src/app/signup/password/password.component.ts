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
import { InService } from 'src/app/in/in.service';
import { SigninResponse } from 'src/app/shared/type/in-type';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  form: FormGroup | undefined;
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  user = localStorage.getItem(Constants.USER);
  loader = false;
  errorMsg='';
  // password = localStorage.getItem(Constants.ACTIVEPASSWORD);
  constructor(
    private router: Router,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _inService: InService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
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

  goToChoosePlan() {
    this.router.navigate(['signup/choose-plan']);
  }

  onSubmit() {
    if (this.form.valid) {
      this.loader = true;
      this._inService.signin(this.email, this.form.value.password).subscribe({
        next: (res: SigninResponse) => {
          this.loader = false;
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            localStorage.setItem(
              Constants.USER,
              JSON.stringify(res.body.customer_data)
            );
            this.goToPlanChoosePage();
          }
          else{
            this.errorMsg=res.message;
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

  goToForgotPassword() {
    this.router.navigate(['in/forgot-email']);
  }
}
