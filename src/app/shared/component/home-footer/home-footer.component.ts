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
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {
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
