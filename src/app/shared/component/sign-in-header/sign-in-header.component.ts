import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-header',
  templateUrl: './sign-in-header.component.html',
  styleUrls: ['./sign-in-header.component.scss']
})
export class SignInHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  
  goToGetStarted() {
    this.router.navigate(['/']);
  }

  signOut() {
    localStorage.clear();
    this.goToGetStarted();
  }
}
