import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailShoppingCartPage } from './detail-shopping-cart';

@NgModule({
  declarations: [
    DetailShoppingCartPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailShoppingCartPage),
  ],
  exports: [
    DetailShoppingCartPage
  ]
})
export class DetailShoppingCartPageModule {}
