import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToHomePage(){
    this._router.navigate(['home']);
  }
  goTosignUpPage(){
    this._router.navigate(['']);
  }
}
