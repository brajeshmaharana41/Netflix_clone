import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { InService } from '../in.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrls: ['./manageprofile.component.scss']
})
export class ManageprofileComponent implements OnInit {

  members: any;
  modal = false;

  form: FormGroup | undefined;
  isChild = false;
  loader = false;
  errorMsg = '';
  currentEditMember;

  constructor(private formBuilder: FormBuilder, private _inService: InService, private _router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem(Constants.USER));
    this.members = user?.member;

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      child: ['']
    });
  }

  openModal(member): void {
    this.modal = true;
    this.currentEditMember = member;
    this.form.patchValue({
      name: this.currentEditMember?.name,
      child: this.currentEditMember?.kids,
    })
    this.isChild = this.currentEditMember?.kids;
  }

  done() {
    this._router.navigate(['in/profile']);
  }

  cancel() {
    this.modal = false;
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      const request = {
        "profile_name": this.form?.value?.name,
        "kids": String(this.isChild)
      };
      this._inService
        .updateProfile(this.currentEditMember?.id, request)
        .subscribe({
          next: (res) => {
            this.loader = false;
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              let viewer_id = res?.body['member'].length;
              let viewer = res?.body['member'][viewer_id - 1];

              localStorage.setItem(Constants.USER, JSON.stringify(res.body));
              localStorage.setItem('viewer', JSON.stringify(viewer));
              this.modal = false;
              this.ngOnInit();

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

  delete() {
    this._inService
      .deleteProfile(this.currentEditMember?.id)
      .subscribe({
        next: (res) => {
          this.loader = false;
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            let viewer_id = res?.body['member'].length;
            let viewer = res?.body['member'][viewer_id - 1];

            localStorage.setItem(Constants.USER, JSON.stringify(res.body));
            localStorage.setItem('viewer', JSON.stringify(viewer));
            this.modal = false;
            this.ngOnInit();

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

