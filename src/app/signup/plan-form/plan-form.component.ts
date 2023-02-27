import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.scss']
})
export class PlanFormComponent implements OnInit {
selectedPlan=1;
  constructor(private _router: Router) {}

  ngOnInit(): void {
  }
  goToRegFormPage() {
    this._router.navigate(['signup/payment-picker']);
  }

  selectPlan(plannumber:number){
    this.selectedPlan=plannumber;
  }
}
