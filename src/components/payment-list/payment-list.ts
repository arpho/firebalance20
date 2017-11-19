import { Component,Input,OnChanges,SimpleChanges,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {UpdatePaymentPage} from '../../pages/update-payment/update-payment';

/**
 * Generated class for the PaymentListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment-list',
  templateUrl: 'payment-list.html'
})
export class PaymentListComponent implements OnInit, OnChanges{
 @Input() paymentsList:any
  text: string;

  ngOnInit(){
    console.log('paymentsList oninit',this.paymentsList)
  }
  delete(){
    console.log('delete')
  }

  update(payment){
    console.log('this is trhe key',payment)
    let modal = this.modal.create(UpdatePaymentPage,payment);
    modal.present();
    
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('changes',changes)
  }
  constructor(
    public modal: ModalController
  ) {
    console.log('Hello PaymentListComponent Component');
    this.text = 'Hello World payments-list component';
    console.log('paymentsList constructor',this.paymentsList)
    this.paymentsList= [];
  }

}
