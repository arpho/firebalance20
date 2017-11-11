import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PaymentItemListComponent } from './payment-item-list';

@NgModule({
  declarations: [
    PaymentItemListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PaymentItemListComponent
  ]
})
export class PaymentItemListComponentModule {}
