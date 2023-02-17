import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { InService } from '../in.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  mobile = localStorage.getItem(Constants.FORGOTPASSWORDPHONE);
  resetType: string;
  errorMsg = '';
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _inService: InService
  ) {
    this.resetType = this._activatedRoute.snapshot.paramMap.get('type');
  }

  ngOnInit(): void {}

  verifyOTP(otp: string) {
    this._inService.forgotPasswordOTPVerify(this.mobile, otp).subscribe({
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
  goToChangepasswordPage() {
    this._router.navigate(['account/change-password']);
  }
}
