import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constant';

@Component({
  selector: 'app-signup-header',
  templateUrl: './signup-header.component.html',
  styleUrls: ['./signup-header.component.scss'],
})
export class SignupHeaderComponent implements OnInit {
  user = localStorage.getItem(Constants.USER);
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signOut() {
    localStorage.clear();
    this.goToGetStarted();
  }


  goToGetStarted() {
    this.router.navigate(['/']);
  }
  goToSignIn() {
    this.router.navigate(['in/login']);
  }
}
