import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../../core/constants';

@Component({
  selector: 'app-signup-header',
  templateUrl: './signup-header.component.html',
  styleUrls: ['./signup-header.component.scss'],
})
export class SignupHeaderComponent implements OnInit {
  pass = localStorage.getItem(Constant.ACTIVEPASSWORD);
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signOut() {
    localStorage.clear();
    this.goToSignIn();
  }

  goToSignIn() {
    this.router.navigate(['in']);
  }
}
