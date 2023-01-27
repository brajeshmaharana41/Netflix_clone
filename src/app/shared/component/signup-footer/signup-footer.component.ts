import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

interface FooterData {
  name: string;
}
const TREE_DATA: FooterData[] = [
  { name: 'FAQ' },
  { name: 'Help Centre' },
  // { name: "Account"},
  { name: 'Netflix Shop' },
  // { name: "Investor Relations"},
  // { name: "Jobs"},
  // { name: "Ways to Watch"},
  { name: 'Terms of Use' },
  { name: 'Privacy' },
  { name: 'Cookie Preferences' },
  { name: 'Corporate Information' },
  // { name: "Contact Us"},
  // { name: "Speed Test"},
  // { name: "Legal Notices"},
  // { name: "Only on Netflix"},
];
@Component({
  selector: 'app-signup-footer',
  templateUrl: './signup-footer.component.html',
  styleUrls: ['./signup-footer.component.scss'],
})
export class SignupFooterComponent implements OnInit {
  foterLists: any;
  selectedLang: string;
  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    this.foterLists = TREE_DATA;
    this._commonService.translateLanguage.subscribe((res: string) => {
      this.selectedLang = res;
    });
  }

  switchLanguage(lang: string) {
    this._commonService.switchLanguage(lang);
  }
}
