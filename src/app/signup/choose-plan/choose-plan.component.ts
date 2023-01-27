import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  goToRegFormPage() {
    this._router.navigate(['signup/planform']);
  }
}
