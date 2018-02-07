import { Component,OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { DetailShoppingCartPage } from '../detail-shopping-cart/detail-shopping-cart';
import { CreateShoppingCartPage} from '../../pages/create-shopping-cart/create-shopping-cart'
import { Subscription } from 'rxjs/Subscription';

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
  selectedCart: any = DetailShoppingCartPage;
  subscription: Subscription;
  portrait: boolean = true;
  landscape: boolean = false;

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public platform:Platform,
    public ShoppingCarts: ShoppingCartsProvider

  ) {
    //this.landscape= this.platform.width()>2000;
    this.selectedCart = new ShoppingCartModel(); //inizializzo il nuovo carrello della spesa

    this.subscription = this.ShoppingCarts.shoppingCartSubject.subscribe(obs => {
      if (obs) {
        this.shoppingCarts = this.ShoppingCarts.shoppingCarts;

      }

    })
  }
  selectedCartEvent(cart) {
    this.selectedCart = cart; // carrello della spesa selezionato
    let modal = this.modal.create(DetailShoppingCartPage, cart);
    modal.present();

  }

  create() {
    let modal = this.modal.create(CreateShoppingCartPage,new ShoppingCartModel());
    modal.present();
  }

  resize() {
    this.portrait = !this.portrait;
    this.landscape = !this.landscape;
  }

  ionViewDidLoad() {
  }

}
