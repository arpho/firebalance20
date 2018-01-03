import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShoppingCartDetailComponent } from './shopping-cart-detail';

@NgModule({
  declarations: [
    ShoppingCartDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ShoppingCartDetailComponent
  ]
})
export class ShoppingCartDetailComponentModule {}
