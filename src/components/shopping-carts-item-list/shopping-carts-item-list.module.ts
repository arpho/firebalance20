import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShoppingCartsItemListComponent } from './shopping-carts-item-list';

@NgModule({
  declarations: [
    ShoppingCartsItemListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ShoppingCartsItemListComponent
  ]
})
export class ShoppingCartsItemListComponentModule {}
