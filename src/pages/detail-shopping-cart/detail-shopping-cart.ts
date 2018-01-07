import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShoppingCartModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the DetailShoppingCartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-shopping-cart',
  templateUrl: 'detail-shopping-cart.html',
})
export class DetailShoppingCartPage {
  selectedCart: ShoppingCartModel

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController) {
    this.selectedCart = new ShoppingCartModel();
    console.log('params', this.navParams.data)
    this.selectedCart = this.navParams.data || new ShoppingCartModel()
  }

  dismiss() {
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailShoppingCartPage');
  }

}
