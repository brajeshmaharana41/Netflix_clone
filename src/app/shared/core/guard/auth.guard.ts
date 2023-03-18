import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../../constants/constant';
// import { AppRoutes } from 'src/app/constants/app.route';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token: any;
    try {
      token = localStorage.getItem(Constants.SESSIONTOKENSTRING);
    } catch (e) {
      console.log(e);
    }
    if (token) {
      return false;
    } else {
      return true;
    }
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
