import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShoppingCartsListComponent } from './shopping-carts-list';

@NgModule({
  declarations: [
    ShoppingCartsListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ShoppingCartsListComponent
  ]
})
export class ShoppingCartsListComponentModule {}
