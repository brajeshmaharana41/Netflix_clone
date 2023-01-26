import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToPlanFormPage() {
    this._router.navigate(['signup/planform']);
  }
}
