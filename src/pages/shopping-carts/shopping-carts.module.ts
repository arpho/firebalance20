import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCartsPage } from './shopping-carts';

@NgModule({
  declarations: [
    ShoppingCartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCartsPage),
  ],
  exports: [
    ShoppingCartsPage
  ]
})
export class ShoppingCartsPageModule {}
