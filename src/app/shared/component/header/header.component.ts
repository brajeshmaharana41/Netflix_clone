import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constant';
import { CommonService } from '../../service/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLang: string;
  user = localStorage.getItem(Constants.USER);
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  constructor(private _commonService: CommonService, private router: Router,private location:Location) {
    this._commonService.translateLanguage.subscribe((res: string) => {
      this.selectedLang = res;
    });
  }

  ngOnInit(): void {}

  switchLanguage(lang: string) {
    this._commonService.switchLanguage(lang);
  }

  goToSignIn() {
    this.router.navigate(['in/login']);
  }

  goToGetStarted() {
    this.router.navigate(['/in/get-started']);
  }

  signOut() {
    localStorage.clear();
    window.location.reload();
    // this.goToGetStarted();
  }
}
