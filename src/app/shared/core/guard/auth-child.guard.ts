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
// import { Observable } from 'rxjs';
import { Constants } from '../../../shared/constants/constant';
// import { AppRoutes } from 'src/app/constants/app.route';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const pass = localStorage.getItem(Constants.ACTIVEPASSWORD);
    const token = localStorage.getItem(Constants.SESSIONTOKENSTRING);
    // const email = localStorage.getItem(Constant.ACTIVEEMAIL);
    if (token) {
      this.router.navigate(['in']);
      return false;
    }
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class NoAuthTokenGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token: any;
    try {
      token = localStorage.getItem(Constants.SESSIONTOKENSTRING);
    } catch (e) {
      console.log(e);
    }
    if (token) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
