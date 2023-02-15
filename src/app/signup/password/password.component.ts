import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../shared/constants/constant';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToChoosePlan() {
    localStorage.setItem(Constants.ACTIVEPASSWORD, '123456');
    this.router.navigate(['signup/choose-plan']);
  }
}
