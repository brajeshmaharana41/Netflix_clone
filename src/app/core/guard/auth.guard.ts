import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/constants/app.route';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const token = localStorage.getItem('access_token')
    // if (token) {
    //   if (state.url === `/${AppRoutes.login}` || state.url === '' || state.url === '/' || state.url === `/${AppRoutes.otp}`) {
    //     this.router.navigate([AppRoutes.dashboard]);
    //   }
    // } else {
      if (state.url !== `/${AppRoutes.getstarted}`) {
        this.router.navigate([AppRoutes.getstarted]);
      }
    // }
    return true;
  }

}
