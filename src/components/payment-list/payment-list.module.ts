import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PaymentListComponent } from './payment-list';

@NgModule({
  declarations: [
    PaymentListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PaymentListComponent
  ]
})
export class PaymentListComponentModule {}
