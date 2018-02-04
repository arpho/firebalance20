import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateShoppingCartPage } from './create-shopping-cart';

@NgModule({
  declarations: [
    CreateShoppingCartPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateShoppingCartPage),
  ],
  exports: [
    CreateShoppingCartPage
  ]
})
export class CreateShoppingCartPageModule {}
