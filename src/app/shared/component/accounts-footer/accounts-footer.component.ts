import { Component, OnInit } from '@angular/core';
interface FooterData {
  name: string;
}
const TREE_DATA: FooterData[] = [
  { name: "Audio Description"},
  { name: "Help Centre"},
  { name: "Gift Cards"},
  { name: "Media Centre"},
  { name: "Investor Relations"},
  { name: "Jobs"},
  { name: "Terms of Use"},
  { name: "Privacy"},
  { name: "Legal Notices"},
  { name: "Cookie Preferences"},
  { name: "Corporate Information"},
  { name: "Contact Us"},

]
@Component({
  selector: 'app-accounts-footer',
  templateUrl: './accounts-footer.component.html',
  styleUrls: ['./accounts-footer.component.scss']
})
export class AccountsFooterComponent implements OnInit {
  serviceCode = "Service Code"
  foterLists: any

  constructor() { }

  ngOnInit(): void {
    this.foterLists = TREE_DATA
  }

  onclickService(){
    this.serviceCode = "163-218"
  }

}
