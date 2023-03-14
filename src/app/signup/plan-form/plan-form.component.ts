import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constant';
import {
  SubscriptionResponse,
  SubscriptionResponseBody,
  UserSubscribeResponse,
} from 'src/app/shared/type/signup.type';
import { SignupService } from '../signup.service';

export interface DevicesData {
  name: string;
  price: string;
  quality: string;
  resolution: string;
  devices_mobile: string;
  devices_tablet: string;
  devices_laptop: string;
  devices_tv: string;
}

const data_Device: DevicesData[] = [
  {
    name: 'Mobile',
    price: '₹ 149',
    quality: 'Good',
    resolution: '480p',
    devices_mobile: 'phone_iphone',
    devices_tablet: 'tablet',
    devices_laptop: '',
    devices_tv: '',
  },
  {
    name: 'Basic',
    price: '₹ 199',
    quality: 'Good',
    resolution: '720p',
    devices_mobile: 'phone_iphone',
    devices_tablet: 'tablet',
    devices_laptop: 'laptop_mac',
    devices_tv: 'tv',
  },
  {
    name: 'Standard',
    price: '₹ 499',
    quality: 'Better',
    resolution: '1080p',
    devices_mobile: 'phone_iphone',
    devices_tablet: 'tablet',
    devices_laptop: 'laptop_mac',
    devices_tv: 'tv',
  },
  {
    name: 'Premium',
    price: '₹ 649',
    quality: 'Best',
    resolution: '4K+HDR',
    devices_mobile: 'phone_iphone',
    devices_tablet: 'tablet',
    devices_laptop: 'laptop_mac',
    devices_tv: 'tv',
  },
];

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.scss'],
})
export class PlanFormComponent implements OnInit {
  selectedPlan: SubscriptionResponseBody;
  plans: SubscriptionResponseBody[];
  price_flows: any;
  constructor(private _router: Router, private _signUpService: SignupService) {
    this.getAllSubscription();
  }

  ngOnInit(): void {
    this.price_flows = data_Device;
    this.getAllSubscription();
  }
  goToRegFormPage() {
    this._router.navigate(['signup/payment-picker']);
  }
  selectPlan(plan: SubscriptionResponseBody) {
    this.selectedPlan = plan;
  }

  getAllSubscription() {
    this._signUpService.getAllSubscription().subscribe({
      next: (res: SubscriptionResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          this.plans = res.body;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
  }

  subscribe(subscription_Id: string) {
    this._signUpService.userSubscribe(subscription_Id).subscribe({
      next: (res: UserSubscribeResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
  }
}
