import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePaymentPage } from './create-payment';

@NgModule({
  declarations: [
    CreatePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePaymentPage),
  ],
  exports: [
    CreatePaymentPage
  ]
})
export class CreatePaymentPageModule {}
