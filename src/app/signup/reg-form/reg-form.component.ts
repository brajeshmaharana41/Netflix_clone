import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/shared/core/constants';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AWSCognitoService } from 'src/app/shared/service/aws-cognito.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  email = localStorage.getItem(Constant.ACTIVEEMAIL);
  password = localStorage.getItem(Constant.ACTIVEPASSWORD);
  form: FormGroup | undefined;
  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
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
    this.awsCognitoService
      .signIn({ email: this.formemail, password: this.formpassword })
      .then((data) => {
        console.log(data);
        // localStorage.setItem(Constant.ACTIVEPASSWORD, this.form.value.password);
        // this.goToPlanChoosePage();
      });
  }
  goToPlanChoosePage() {
    this._router.navigate(['signup/choose-plan']);
  }
}
