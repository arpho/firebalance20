import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

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
  component:string='pagamento' //impongo che usi paymentProvider
  filterString:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view:ViewController) {
  }
  selected(item){
    console.log('got',item)
    this.view.dismiss({itemId:item})
  }

   doFilter(filterString){
     console.log('filterString',filterString)
     this.filterString = filterString.data
   }
  dismiss() {
    this.view.dismiss();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSelectorPage');
  }

}
