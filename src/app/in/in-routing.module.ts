import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailPasswordComponent } from './forgot-email-password/forgot-email-password.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginHelpComponent } from './login-help/login-help.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'get-started',
    component: GetStartedComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-help',
    component: LoginHelpComponent,
  },
  {
    path: 'signout',
    component: LogoutComponent,
  },
  {
    path: 'forgot-email',
    component: ForgotEmailPasswordComponent,
  },
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InRoutingModule {}
