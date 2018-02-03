import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ItemDetailComponent } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ItemDetailComponent
  ]
})
export class ItemDetailComponentModule {}
