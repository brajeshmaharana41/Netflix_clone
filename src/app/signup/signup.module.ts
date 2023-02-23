import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { PaymentPickerComponent } from './payment-picker/payment-picker.component';
import { CreditOptionComponent } from './credit-option/credit-option.component';
import { SignUpRoutingModule } from './signup-routing.module';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupHeaderComponent } from '../shared/component/signup-header/signup-header.component';
import { SharedModule } from '../shared/shared.module';
import { SignupFooterComponent } from '../shared/component/signup-footer/signup-footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './password/password.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    RegFormComponent,
    ChoosePlanComponent,
    PlanFormComponent,
    PaymentPickerComponent,
    CreditOptionComponent,
    SignupHeaderComponent,
    SignupFooterComponent,
    PasswordComponent,
    AddprofileComponent,
    SuccessMessageComponent,
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class SignupModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
