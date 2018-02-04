import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Subscription } from 'rxjs/Subscription';
/**
 * Generated class for the CreateShoppingCartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-shopping-cart',
  templateUrl: 'create-shopping-cart.html',
})
export class CreateShoppingCartPage implements OnDestroy {
  createdCart: ShoppingCartModel
  subscription: Subscription
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public utilities:UtilitiesProvider,
    public ShoppingCarts: ShoppingCartsProvider) {
    this.createdCart = new ShoppingCartModel()
  }
  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }
  Save(cart: ShoppingCartModel) {
    console.log('saving', cart)
    this.subscription = this.ShoppingCarts.create().subscribe(ref => {
      if (ref)
        ref.push(cart).then(()=>{
          this.utilities.showToast('carrello creato correttamente','5000','top')
        })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShoppingCartPage');
  }

}
