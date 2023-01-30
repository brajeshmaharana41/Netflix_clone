import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['in']);
  }
}
