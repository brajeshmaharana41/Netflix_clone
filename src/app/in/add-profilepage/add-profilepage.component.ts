import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InService } from '../in.service';
import { Constants } from 'src/app/shared/constants/constant';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-profilepage',
  templateUrl: './add-profilepage.component.html',
  styleUrls: ['./add-profilepage.component.scss']
})
export class AddProfilepageComponent implements OnInit {

  form: FormGroup | undefined;
  isChild = false;
  loader = false;
  errorMsg='';

  constructor(private formBuilder: FormBuilder, private _inService: InService, private _router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      child: ['']
    });
  }

  get formValue() {
    return this.form.value;
  }
  cancel() {
    this._router.navigate(['in/profile']);
  }
  submit() {
    if (this.form.valid) {
      const request = {
        "member": [
          {
            "name": this.formValue.name,
            "kids": this.isChild
          }
        ]
      }
      this._inService
        .AddProfile(request)
        .subscribe({
          next: (res) => {
            this.loader = false;
            if (res.status === Constants.SUCCESSSTATUSCODE) {
              let viewer_id = res?.body['member'].length;
              let viewer = res?.body['member'][viewer_id - 1];

              localStorage.setItem('user', JSON.stringify(res.body));
              localStorage.setItem('viewer', JSON.stringify(viewer));
              this._router.navigate(['/home']);

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

}
