import { PaymentsProvider } from '../../providers/payments/payments';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import {CreatePaymentPage} from '../create-payment/create-payment'

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController,
    public Payments: PaymentsProvider
  ) {

  }

  ngOnInit() {
    this.Payments.getPaymentsArray(payments => {
      console.log('got payments', payments)
      this.paymentsList = payments;
    })
  }


  create(){
    let modal = this.modal.create(CreatePaymentPage);
    modal.present();
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
