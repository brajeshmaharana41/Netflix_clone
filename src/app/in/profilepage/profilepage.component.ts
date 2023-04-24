import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {

  members: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem(Constants.USER));
    this.members = user?.member;
  }
  goToHomePage(member) {
    localStorage.setItem('viewer', JSON.stringify(member));
    this._router.navigate(['home']);
  }
}
