import { Component,Input,OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { PaymentsProvider } from '../../providers/payments/payments';
import { PaymentsModel } from '../../models/payment.model';
import {UpdatePaymentPage} from '../../pages/update-payment/update-payment';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
/**
 * Generated class for the PaymentItemListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment-item-list',
  templateUrl: 'payment-item-list.html'
})
export class PaymentItemListComponent implements OnInit,OnChanges {
 @Input() Payment:PaymentsModel;
 @Input() shoppingCartDateFilter:[(cart:ShoppingCartModel)=>boolean]
  text: string;
  totale: number;


  
  ngOnChanges(changes:SimpleChanges){
    console.log('changes on item',changes)
  }

  ngOnInit(){
    console.log('payment',this.Payment)
     this.Payments.calculateAmmount(this.shoppingCartDateFilter,this.Payment.key, acc=>{
       this.totale = acc.totale
       //console.log('totale per '+this.Payment.nome,acc.totale);
     })
  }
  constructor(
    public Payments:PaymentsProvider,
    public modal: ModalController,
  ) {
  }

}
