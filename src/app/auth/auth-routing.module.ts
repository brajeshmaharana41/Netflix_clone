import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../constants/app.route';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'getstarted'
  },
  {
    path: `${AppRoutes.getstarted}`,
    component: GetStartedComponent
  },
  {
    path: `${AppRoutes.signup}`,
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
