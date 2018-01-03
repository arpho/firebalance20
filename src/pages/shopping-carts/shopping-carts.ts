import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { CreatePaymentPage } from '../create-payment/create-payment';

/**
 * Generated class for the ShoppingCartsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopping-carts',
  templateUrl: 'shopping-carts.html',
})
export class ShoppingCartsPage {
  shoppingCarts: ShoppingCartModel[]// = new Observable<ShoppingCartModel>();
  cartArray: [ShoppingCartModel] = [null];
  selectedCart: any = CreatePaymentPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ShoppingCarts: ShoppingCartsProvider

  ) {
    this.selectedCart= CreatePaymentPage

    this.ShoppingCarts.shoppingCartSubject.subscribe(obs => {
      if (obs) {
        this.shoppingCarts = this.ShoppingCarts.shoppingCarts;

      }

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartsPage');
  }

}
