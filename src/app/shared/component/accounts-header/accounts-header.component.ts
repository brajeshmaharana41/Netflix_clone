import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-header',
  templateUrl: './accounts-header.component.html',
  styleUrls: ['./accounts-header.component.scss']
})
export class AccountsHeaderComponent implements OnInit {

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
  goToManageProfile() {
    this.router.navigate(['in/profile']);
  }
  goToAccountPage() {
    this.router.navigate(['account/accountsPage']);
  }
}
