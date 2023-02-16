import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-email-password',
  templateUrl: './forgot-email-password.component.html',
  styleUrls: ['./forgot-email-password.component.scss']
})
export class ForgotEmailPasswordComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
  }
  gotoLogoutPage(){
    this._router.navigate(["in/signout"])
  }
}
