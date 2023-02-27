import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToHomePage() {
    this._router.navigate(['home']);
  }
}
