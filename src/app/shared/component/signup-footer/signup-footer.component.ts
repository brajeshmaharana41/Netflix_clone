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
  selector: 'app-signup-footer',
  templateUrl: './signup-footer.component.html',
  styleUrls: ['./signup-footer.component.scss']
})
export class SignupFooterComponent implements OnInit {
  foterLists: any

  constructor() { }

  ngOnInit(): void {
    this.foterLists = TREE_DATA
  }

}
