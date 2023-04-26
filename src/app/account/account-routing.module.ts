import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';

const routes: Routes = [
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'accountsPage',
    component: AccountsPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'change-password',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
