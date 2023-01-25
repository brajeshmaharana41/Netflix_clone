import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  panelOpenState = false;
  isClicked = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {}
  executeUsecase() {
    this.isClicked = true;
  }

  goToSignUpPage() {
    this._router.navigate(['signup']);
  }
}
