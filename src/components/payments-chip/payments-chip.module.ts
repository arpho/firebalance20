import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PaymentsChipComponent } from './payments-chip';

@NgModule({
  declarations: [
    PaymentsChipComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PaymentsChipComponent
  ]
})
export class PaymentsChipComponentModule {}
