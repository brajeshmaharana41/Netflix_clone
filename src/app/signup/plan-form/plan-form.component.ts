import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import { SubscriptionResponse, SubscriptionResponseBody, UserSubscribeResponse } from 'src/app/shared/type/signup.type';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.scss']
})
export class PlanFormComponent implements OnInit {
selectedPlan = 2;
plans:SubscriptionResponseBody[];
  constructor(private _router: Router,private _signUpService:SignupService) {}

  ngOnInit(): void {
    this.getAllSubscription();
  }
  goToRegFormPage() {
    this._router.navigate(['signup/payment-picker']);
  }

  selectPlan(plannumber:number){
    this.selectedPlan=plannumber;
  }

  getAllSubscription(){
this._signUpService.getAllSubscription().subscribe({
  next:(res:SubscriptionResponse)=>{
if(res.status===Constants.SUCCESSSTATUSCODE){
this.plans=res.body;
}
  },error:(err:HttpErrorResponse)=>{
    console.log(err.error);
  }
})
  }


  subscribe(subscription_Id:string){
    this._signUpService.userSubscribe(subscription_Id,).subscribe({
      next:(res:UserSubscribeResponse)=>{
    if(res.status===Constants.SUCCESSSTATUSCODE){
    }
      },error:(err:HttpErrorResponse)=>{
        console.log(err.error);
      }
    })
  }
}
