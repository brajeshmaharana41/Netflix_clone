import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../../core/constants';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLang: string;
  pass = localStorage.getItem(Constant.ACTIVEPASSWORD);
  email = localStorage.getItem(Constant.ACTIVEEMAIL);
  constructor(private _commonService: CommonService, private router: Router) {
    this._commonService.translateLanguage.subscribe((res: string) => {
      this.selectedLang = res;
    });
  }

  ngOnInit(): void {}

  switchLanguage(lang: string) {
    this._commonService.switchLanguage(lang);
  }
  signIn(){
    this.router.navigate(['in/login'])
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['in']);
  }
}
