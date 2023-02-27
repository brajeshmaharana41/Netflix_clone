import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { InService } from '../in.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  mobile = localStorage.getItem(Constants.FORGOTPASSWORDPHONE);
  resetType: string;
  errorMsg = '';
  form: FormGroup | undefined;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _inService: InService,
    private formBuilder: FormBuilder,
    private _location: Location
  ) {
    this.resetType = this._activatedRoute.snapshot.paramMap.get('type');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      otp: ['', [Validators.required]],

      // productList: this.formBuilder.array([this.productListGroup()])
    });
  }

  verifyOTP() {
    if (this.form.valid) {
      this._inService
        .forgotPasswordOTPVerify(this.mobile, this.form.value.otp)
        .subscribe({
          next: (res: HttpResponse) => {
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              localStorage.setItem(
                Constants.USER,
                JSON.stringify(res.body.customer_data)
              );
              this.goToChangepasswordPage();
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
  }

  forgotPasswordRequestAPI(user_name: string) {
    this._inService.forgotPasswordRequest(user_name).subscribe({
      next: (res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          localStorage.setItem(Constants.FORGOTPASSWORDPHONE, user_name);
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

  goToChangepasswordPage() {
    this._router.navigate(['account/change-password']);
  }

  goBack() {
    this._location.back();
  }
}
