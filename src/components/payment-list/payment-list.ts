import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Component,Input,OnChanges,SimpleChanges,OnInit,ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {UpdatePaymentPage} from '../../pages/update-payment/update-payment';

/**
 * Generated class for the PaymentListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment-list',
  templateUrl: 'payment-list.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PaymentListComponent implements OnInit, OnChanges{
 @Input() paymentsList:any
 @Input() shoppingCartDateFilter:(cart:ShoppingCartModel)=>boolean
  text: string;

  ngOnInit(){
  }
  delete(){
    console.log('delete')
  }

  update(payment){
    let modal = this.modal.create(UpdatePaymentPage,payment);
    modal.present();
    
  }
  logDrag(event){
    //console.log('drag',event  );
  }

  ngOnChanges(changes:SimpleChanges){
  }
  constructor(
    
    public modal: ModalController
  ) {
    this.paymentsList= [];
  }

}
