import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/shared/core/constants';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToChoosePlan() {
    localStorage.setItem(Constant.ACTIVEPASSWORD, '123456');
    this.router.navigate(['signup/choose-plan']);
  }
}
