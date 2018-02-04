import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

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
    public ShoppingCarts:ShoppingCartsProvider,
    public utilities:UtilitiesProvider,
    public view: ViewController) {
    this.selectedCart = new ShoppingCartModel();
    this.selectedCart = this.navParams.data || new ShoppingCartModel()
    console.log('received cart',this.selectedCart)
  }

  dismiss() {
    this.view.dismiss();
  }
  
  Save(cart:ShoppingCartModel){
    console.log("got",cart)
    this.ShoppingCarts.update().subscribe(ref=>{
      if(ref){
        console.log('got ref',JSON.parse( JSON.stringify(cart ) ))
        cart = new ShoppingCartModel().buildFrom(cart)
        console.log('sanitized cart',JSON.parse( JSON.stringify(cart ) ));
        ref.child(`/${cart.key}/`).update(cart).then(res=>{
          this.utilities.showToast('carrello della spesa modificato','2000','top')
          
        }).catch(err=>{
          this.utilities.showToast('problemi'+err,'10000','top')
        })
      }
    })
  }

}
