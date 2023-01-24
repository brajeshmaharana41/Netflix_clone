import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'in',
    loadChildren: () => import('./in/in.module').then((m) => m.InModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
