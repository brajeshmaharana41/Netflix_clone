import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constant';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLang: string;
  pass = localStorage.getItem(Constants.ACTIVEPASSWORD);
  email = localStorage.getItem(Constants.ACTIVEEMAIL);
  constructor(private _commonService: CommonService, private router: Router) {
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
    this.router.navigate(['/']);
  }

  signOut() {
    localStorage.clear();
    this.goToGetStarted();
  }
}
