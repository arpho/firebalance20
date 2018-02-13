import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CreatePaymentPage } from '../../pages/create-payment/create-payment';

/**
 * Generated class for the PaymentSelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-selector',
  templateUrl: 'payment-selector.html',
})
export class PaymentSelectorPage {
  component: string = 'pagamento' //impongo che usi paymentProvider
  filterString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
    public modal: ModalController,
  ) {
  }
  selected(item) {
    this.view.dismiss({ itemId: item })
  }


  create() {
    let modal = this.modal.create(CreatePaymentPage)
    modal.onDidDismiss(data => {
      this.dismiss(data)
    })
    modal.present()
  }

  doFilter(filterString) {
    this.filterString = filterString.data
  }
  dismiss(data?) {
    this.view.dismiss({ itemId: data });// ritorno la nuova chiave al chiamante
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSelectorPage');
  }

}
