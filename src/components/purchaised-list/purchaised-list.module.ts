import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PurchaisedListComponent } from './purchaised-list';

@NgModule({
  declarations: [
    PurchaisedListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PurchaisedListComponent
  ]
})
export class PurchaisedListComponentModule {}
