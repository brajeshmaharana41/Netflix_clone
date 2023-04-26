import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountsHeaderComponent } from '../shared/component/accounts-header/accounts-header.component';
import { AccountsFooterComponent } from '../shared/component/accounts-footer/accounts-footer.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    AccountsHeaderComponent,
    AccountsFooterComponent,
    AccountsPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    MaterialModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AccountModule { }
