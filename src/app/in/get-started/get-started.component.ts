import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { RegistrationComponent } from 'src/app/signup/registration/registration.component';
import { CommonService } from 'src/app/shared/service/common.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
// import { Constant } from 'src/app/shared/core/constants';
import { AWSCognitoService } from 'src/app/shared/service/aws-cognito.service';
import { InService } from '../in.service';
import { Constants } from '../../shared/constants/constant';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  panelOpenState = false;
  isClicked = false;
  form: FormGroup | undefined;
  user = localStorage.getItem(Constants.USER);
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  loader = false;
  constructor(
    private _router: Router,
    private _commonService: CommonService,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private awsCognitoService: AWSCognitoService,
    private _inService: InService
  ) {
    this._commonService.translateLanguage.subscribe((res: string) => {
      this.translate.use(res);
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        this.email ? this.email : '',
        [
          Validators.required,
        ],
      ],

      // productList: this.formBuilder.array([this.productListGroup()])
    });
  }

  onSubmit() {
    if (this.form.valid) {
    }
  }
  executeUsecase() {
    this.isClicked = true;
  }

  // openDialog() {
  //   this._commonService
  //     .openDialog(RegistrationComponent).afterClosed().subscribe({
  //       next:(res:any)=>{console.log(res)}
  //     })
  // }

  // goToSignUpPage() {
  //   localStorage.setItem(Constants.ACTIVEEMAIL, this.form.value.email);

  //   // if account not created
  //   this._router.navigate(['signup']);

  //   //if account created
  //   // this._router.navigate(['signup/password']);

  //   //if subscribed
  //   // this._router.navigate(['in/login']);
  // }

  getEmailStatus() {
    if (this.form && this.form.valid) {
      this.loader = true;
      this._inService.emailStatus(this.form.value.email).subscribe({
        next: (res) => {
          this.loader = false;
          localStorage.setItem(Constants.ACTIVEEMAIL, this.form.value.email);
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            this._router.navigate(['in/login']);
          } else if (res.status === Constants.SUCCESSSTATUSCODE1) {
            this._router.navigate(['signup/password']);
          } else if (res.status === Constants.SUCCESSSTATUSCODE2) {
            this._router.navigate(['signup']);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.loader = false;
          console.log(err.error);
        },
      });
    }
  }

  goToChooseFormPage() {
    this._router.navigate(['signup/choose-plan']);
  }
  goToSignInPage() {
    this._router.navigate(['in/login']);
  }
}
