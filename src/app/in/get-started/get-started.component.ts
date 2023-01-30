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
import { Constant } from 'src/app/shared/core/constants';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  panelOpenState = false;
  isClicked = false;
  form: FormGroup | undefined;
  pass = localStorage.getItem(Constant.ACTIVEPASSWORD);
  email = localStorage.getItem(Constant.ACTIVEEMAIL);
  constructor(
    private _router: Router,
    private _commonService: CommonService,
    private formBuilder: FormBuilder,
    private translate: TranslateService
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
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
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

  goToSignUpPage() {
    localStorage.setItem(Constant.ACTIVEEMAIL, this.form.value.email);
    this._router.navigate(['signup']);

    //if email is not registered
    // this._router.navigate(['signup/password']);
    // this.form?.get('email')?.errors;
  }

  goToChooseFormPage() {
    this._router.navigate(['signup/choose-plan']);
  }
}
