import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DiscountComponent } from './discount';

@NgModule({
  declarations: [
    DiscountComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DiscountComponent
  ]
})
export class DiscountComponentModule {}
