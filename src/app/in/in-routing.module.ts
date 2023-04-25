import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailPasswordComponent } from './forgot-email-password/forgot-email-password.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { InfoComponent } from './info/info.component';
import { LoginHelpComponent } from './login-help/login-help.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { AddProfilepageComponent } from './add-profilepage/add-profilepage.component';

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
    path: 'profile',
    component: ProfilepageComponent,
  },
  {
    path: 'addprofilepage',
    component: AddProfilepageComponent,
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
    path: 'info/:type',
    component: InfoComponent,
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
