import { Component, OnInit } from '@angular/core';

interface FooterData {
  name: string;
}
const TREE_DATA: FooterData[] = [
  { name: "FAQ"},
  { name: "Help Centre"},
  { name: "Netflix Shop"},
  { name: "Terms of Use"},
  { name: "Privacy"},
  { name: "Cookie Preferences"},
  { name: "Corporate Information"},
]

@Component({
  selector: 'app-sign-in-footer',
  templateUrl: './sign-in-footer.component.html',
  styleUrls: ['./sign-in-footer.component.scss']
})
export class SignInFooterComponent implements OnInit {

  foterLists: any

  constructor() { }

  ngOnInit(): void {
    this.foterLists = TREE_DATA
  }
}
