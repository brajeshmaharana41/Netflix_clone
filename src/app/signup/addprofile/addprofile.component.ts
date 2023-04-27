import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { SignupService } from '../signup.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit {

  form: FormGroup | undefined;
  isChild = false;
  loader = false;
  errorMsg = '';

  constructor(private _router: Router, private formBuilder: FormBuilder, private signupservice: SignupService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      profile1: [''],
      profile1Child: [''],
      profile2: [],
      profile2Child: [''],
      profile3: [],
      profile3Child: [''],
      profile4: [],
      profile4Child: [''],
    });
  }

  submit() {
    if (this.form.valid) {
      console.log("Form Valid", this.form);
      const values = this.form?.value;
      let members = [
        {
          "name": values.name,
          "kids": false
        }
      ];
      if (values.profile1) {
        members.push({
          "name": values.profile1,
          "kids": values.profile1Child ? true : false
        });
      }
      if (values.profile2) {
        members.push({
          "name": values.profile2,
          "kids": values.profile2Child ? true : false
        });
      }
      if (values.profile3) {
        members.push({
          "name": values.profile3,
          "kids": values.profile3Child ? true : false
        });
      }
      if (values.profile4) {
        members.push({
          "name": values.profile4,
          "kids": values.profile4Child ? true : false
        });
      }

      const request = {
        "name": values.name,
        "member": members
      }

      console.log("request", request);

      this.signupservice
        .AddProfile(request)
        .subscribe({
          next: (res) => {
            this.loader = false;
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              let viewer_id = res?.body['member'].length;
              let viewer = res?.body['member'][viewer_id - 1];

              localStorage.setItem(Constants.USER, JSON.stringify(res.body));
              localStorage.setItem('viewer', JSON.stringify(viewer));
              this._router.navigate(['/in/profile']);

            } else if (res.status === Constants.SUCCESSSTATUSCODE2) {
              this.errorMsg = res.message;
              // wrong pass alert goes here.
            }
          },
          error: (err: HttpErrorResponse) => {
            this.loader = false;
            this.errorMsg = err.message;
            console.log(err.error);
          },
        });
    }
  }

  goToRegFormPage() {
    this._router.navigate(['in/profile']);
  }
}
