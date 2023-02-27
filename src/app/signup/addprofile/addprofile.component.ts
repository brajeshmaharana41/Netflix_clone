import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToRegFormPage() {
    this._router.navigate(['']);
  }
}
