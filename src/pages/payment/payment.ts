import { FilterFactoryProvider } from '../../providers/filter-factory/filter-factory';
import { PaymentsProvider } from '../../providers/payments/payments';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { CreatePaymentPage } from '../create-payment/create-payment';
import { ActionSheetController } from 'ionic-angular'
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import * as _ from 'lodash'
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage implements OnInit {
  public paymentsList: any;
  public filterText: string;
  public shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean
  public filterFunction: (doFilter: ShoppingCartModel) => boolean
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController,
    public Carts: ShoppingCartsProvider,
    public Filters: FilterFactoryProvider,
    public actionSheetCtrl: ActionSheetController,
    public Payments: PaymentsProvider,
    public Utilities: UtilitiesProvider
  ) {
    this.shoppingCartDateFilter = this.Filters.takeEmAll();
  }
  comparer(cartX: ShoppingCartModel, cartY: ShoppingCartModel) {
    if (cartX.dataAcquisto > cartY.dataAcquisto) {
      return 1;
    }
    else if (cartX.dataAcquisto < cartY.dataAcquisto) {
      return -1;
    }
    return 0;
  }

  ngOnInit() {
    this.Carts.getMin(this.comparer, value => {
      this.filterText = ' dal ' + this.Utilities.formatDate(value.dataAcquisto);
    })
    this.Payments.getPaymentsArray(payments => {
      this.paymentsList = payments;
    })
  }

  filter() {
    const intervallo = {
      text: 'intervallo',
      handler: this.Filters.alertAction(txt => this.filterText = txt, fn => this.shoppingCartDateFilter = fn)() //la closure evita che alertController  subisca l'interferenza di actionSheetController 

    }
    let actionSheet = this.actionSheetCtrl.create({
      title: 'limita a ',
      enableBackdropDismiss: true,
      buttons: this.Filters.getFilterActionSheetsButtons(txt => this.filterText = txt, fn => this.shoppingCartDateFilter = fn, intervallo)
    });
    actionSheet.present()
  }


  create() {
    let modal = this.modal.create(CreatePaymentPage);
    modal.present();
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
