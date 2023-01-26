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

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  panelOpenState = false;
  isClicked = false;
  form: FormGroup | undefined;

  constructor(
    private _router: Router,
    private _commonService: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
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
    this._router.navigate(['signup']);
    this.form?.get('email')?.errors;
  }
}
