import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { Constants } from '../../constants/constant';
import { InService } from 'src/app/in/in.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  constructor(private router: Router, private _homeService: HomeService, private _inService: InService) {}
  menus;
  selectedCategoryString='home';
  userData;
  isSticky = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100 ? true : false;
  }
  ngOnInit(): void {
    this.getMenus();
    this.userData = JSON.parse(localStorage.getItem(Constants.USER));
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
    this.router.navigate([`home/${category}`]);
  }

  goToManageProfile() {
    this.router.navigate(['in/manageprofile']);
  }
  goToAccountPage() {
    this.router.navigate(['account/accountsPage']);
  }
  goToHomePage(member) {
    this._inService
      .updateWatchProfile(member?.id)
      .subscribe({
        next: (res) => {
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            localStorage.setItem('viewer', JSON.stringify(member));
            // this.router.navigate(['home']);
            location.reload();
          } else if (res.status === Constants.SUCCESSSTATUSCODE2) {
            // wrong pass alert goes here.
          }
        },
        error: (err: HttpErrorResponse) => {
          // this.loader = false;
          console.log(err.error);
        },
      });
  }
}
