import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PurchaisedItemComponent } from './purchaised-item';

@NgModule({
  declarations: [
    PurchaisedItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PurchaisedItemComponent
  ]
})
export class PurchaisedItemComponentModule {}
