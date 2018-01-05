import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { CreatePaymentPage } from '../create-payment/create-payment';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class ShoppingCartsPage implements OnDestroy {
  shoppingCarts: ShoppingCartModel[]// = new Observable<ShoppingCartModel>();
  cartArray: [ShoppingCartModel] = [null];
  selectedCart: any = CreatePaymentPage;
  subscription: Subscription;
  portrait: boolean=false;
  landscape:boolean=true;

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ShoppingCarts: ShoppingCartsProvider

  ) {
    this.selectedCart= new ShoppingCartModel(); //inizializzo il nuovo carrello della spesa

    this.subscription = this.ShoppingCarts.shoppingCartSubject.subscribe(obs => {
      if (obs) {
        this.shoppingCarts = this.ShoppingCarts.shoppingCarts;
        console.log('shoppingCart',this.shoppingCarts)

      }

    })
  }
  selectedCartEvent(cart){
    this.selectedCart = cart; // carrello della spesa selezionato
    console.log('selezionato',cart)

  }

  resize(){
    this.portrait=!this.portrait;
    this.landscape=!this.landscape;
    console.log('resize')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartsPage');
  }

}