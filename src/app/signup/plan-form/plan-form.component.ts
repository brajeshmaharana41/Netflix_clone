import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  {name: "Mobile", price: '₹ 149', quality: "Good", resolution: '480p', devices_mobile: 'phone_iphone', devices_tablet: 'tablet', devices_laptop: '', devices_tv: ''},
  {name: "Basic", price: '₹ 199', quality: "Good", resolution: '720p', devices_mobile: 'phone_iphone', devices_tablet: 'tablet', devices_laptop: 'laptop_mac', devices_tv: 'tv'},
  {name: "Standard", price: '₹ 499', quality: "Better", resolution: '1080p', devices_mobile: 'phone_iphone', devices_tablet: 'tablet', devices_laptop: 'laptop_mac', devices_tv: 'tv'},
  {name: "Premium", price: '₹ 649', quality: "Best", resolution: '4K+HDR', devices_mobile: 'phone_iphone', devices_tablet: 'tablet', devices_laptop: 'laptop_mac', devices_tv: 'tv'},
];

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.scss']
})
export class PlanFormComponent implements OnInit {
selectedPlan = 2;
  price_flows: any
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.price_flows = data_Device
  }
  goToRegFormPage() {
    this._router.navigate(['signup/payment-picker']);
  }
  selectPlan(plannumber:number){
    this.selectedPlan=plannumber;
  }
}
