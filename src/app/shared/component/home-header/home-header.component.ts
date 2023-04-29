import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  constructor(private router: Router, private _homeService: HomeService) {}
  menus;
  selectedCategoryString='home';
  ngOnInit(): void {
    this.getMenus()
  }

  getMenus() {
    this._homeService.getMenus().subscribe({
      next: async (res) => {
        this.menus = res.body;
      }
    });
  }

  signOut() {
    localStorage.clear();
    this.goToGetStarted();
    // this.router.navigate(['in']);
  }

  goToGetStarted() {
    this.router.navigate(['/']);
  }

  selectedCategory(category: string) {
   this.selectedCategoryString=category;
    this._homeService.selectCategory.emit(category);
  }

  goToManageProfile() {
    this.router.navigate(['in/manageprofile']);
  }
  goToAccountPage() {
    this.router.navigate(['account/accountsPage']);
  }
}
