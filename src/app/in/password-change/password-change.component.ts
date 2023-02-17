import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InService } from '../in.service';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem(Constants.USER));
  form: FormGroup | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private _inService: InService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        this.user.email,
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

      confirmpassword: [
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

  get formValue() {
    return this.form.value;
  }
  submit() {
    if (this.form.valid) {
      this._inService
        .forgotPasswordChange(
          this.user.mobile,
          this.formValue.email,
          this.formValue.password
        )
        .subscribe({
          next: (res: HttpResponse) => {
            if (res.status === Constants.SUCCESSSTATUSCODE) {
            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err.error);
          },
        });
    }
  }
}
