import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToRegFormPage() {
    this._router.navigate(['signup/regform']);
  }
}
