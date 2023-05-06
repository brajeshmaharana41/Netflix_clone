import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { InService } from '../in.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {

  members: any;
  errorMsg;
  loader;

  constructor(private _router: Router, private _inService: InService) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem(Constants.USER));
    this.members = user?.member;
  }
  goToHomePage(member) {
    this._inService
      .updateWatchProfile(member?.id)
      .subscribe({
        next: (res) => {
          this.loader = false;
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            localStorage.setItem('viewer', JSON.stringify(member));
            this._router.navigate(['home']);
          } else if (res.status === Constants.SUCCESSSTATUSCODE2) {
            this.errorMsg = res.message;
            // wrong pass alert goes here.
          }
        },
        error: (err: HttpErrorResponse) => {
          // this.loader = false;
          this.errorMsg = err.message;
          console.log(err.error);
        },
      });
  }
  goToAddProfilePage(){
    this._router.navigate(['in/addprofilepage'])
  }
  redirectToManageProfile() {
    this._router.navigate(['in/manageprofile'])
  }
}
