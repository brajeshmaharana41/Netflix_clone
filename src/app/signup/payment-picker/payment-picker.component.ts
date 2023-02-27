import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-picker',
  templateUrl: './payment-picker.component.html',
  styleUrls: ['./payment-picker.component.scss']
})
export class PaymentPickerComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {
  }
  goToRegFormPage() {
    this._router.navigate(['signup/successPage']);
  }
  goToProfilePages(){
    this._router.navigate(['signup/add_profile']);
  }
}
