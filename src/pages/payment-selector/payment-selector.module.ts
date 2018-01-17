import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentSelectorPage } from './payment-selector';

@NgModule({
  declarations: [
    PaymentSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentSelectorPage),
  ],
  exports: [
    PaymentSelectorPage
  ]
})
export class PaymentSelectorPageModule {}
