import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { PaymentPickerComponent } from './payment-picker/payment-picker.component';
import { CreditOptionComponent } from './credit-option/credit-option.component';
import { SignUpRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [
    RegistrationComponent,
    RegFormComponent,
    ChoosePlanComponent,
    PlanFormComponent,
    PaymentPickerComponent,
    CreditOptionComponent,
  ],
  imports: [CommonModule, SignUpRoutingModule],
})
export class SignupModule {}
