import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { InRoutingModule } from './in-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { LoginHelpComponent } from './login-help/login-help.component';
import { ForgotEmailPasswordComponent } from './forgot-email-password/forgot-email-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GetStartedComponent, LogoutComponent, LoginComponent, LoginHelpComponent, ForgotEmailPasswordComponent],
  imports: [
    CommonModule,
    SharedModule, 
    MaterialModule, 
    InRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class InModule {}
