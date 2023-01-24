import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { CreditOptionComponent } from './credit-option/credit-option.component';
import { PaymentPickerComponent } from './payment-picker/payment-picker.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'choose-plan',
    component: ChoosePlanComponent,
  },
  {
    path: 'credit-option',
    component: CreditOptionComponent,
  },
  {
    path: 'payment-picker',
    component: PaymentPickerComponent,
  },
  {
    path: 'planform',
    component: PlanFormComponent,
  },
  {
    path: 'regform',
    component: RegFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
