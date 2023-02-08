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
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignInHeaderComponent } from '../shared/component/sign-in-header/sign-in-header.component';
import { SignInFooterComponent } from '../shared/component/sign-in-footer/sign-in-footer.component';
// import { JwplayerComponent } from './jwplayer/jwplayer.component';

@NgModule({
  declarations: [
    GetStartedComponent,
    LogoutComponent,
    LoginComponent,
    LoginHelpComponent,
    ForgotEmailPasswordComponent,
    SignInHeaderComponent,
    SignInFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    InRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class InModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
