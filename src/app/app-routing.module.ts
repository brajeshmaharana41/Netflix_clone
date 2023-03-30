import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, NoAuthTokenGuard } from './shared/core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'in',
    loadChildren: () => import('./in/in.module').then((m) => m.InModule),
    canActivate: [NoAuthTokenGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
    canActivate: [NoAuthTokenGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: '',
    redirectTo: 'in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
