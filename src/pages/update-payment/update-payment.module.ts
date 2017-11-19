import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePaymentPage } from './update-payment';

@NgModule({
  declarations: [
    UpdatePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatePaymentPage),
  ],
  exports: [
    UpdatePaymentPage
  ]
})
export class UpdatePaymentPageModule {}
