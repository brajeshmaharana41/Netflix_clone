import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-sign-in-header',
  templateUrl: './forgot-sign-in-header.component.html',
  styleUrls: ['./forgot-sign-in-header.component.scss']
})
export class ForgotSignInHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  
  goToGetStarted() {
    this.router.navigate(['/']);
  }


  goToSignIn() {
    this.router.navigate(['in/login']);
  }

  signOut() {
    localStorage.clear();
    this.goToGetStarted();
  }
}
