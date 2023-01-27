import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from '../constants';
// import { AppRoutes } from 'src/app/constants/app.route';

@Injectable({
  providedIn: 'root',
})
export class AuthPasswordGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const pass = localStorage.getItem(Constant.ACTIVEPASSWORD);
    // const email = localStorage.getItem(Constant.ACTIVEEMAIL);
    if (pass) {
      this.router.navigate(['in']);
      return false;
    }
    return true;
  }
}
