import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  panelOpenState = false;
  isClicked= false;

  constructor() { }

  ngOnInit(): void {
  }
  executeUsecase() {
    this.isClicked = true;
  }
}
