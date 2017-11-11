import { PaymentsModel } from '../../models/payment.model';
import { Component,Input,OnInit } from '@angular/core';

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
export class PaymentItemListComponent implements OnInit {
 @Input() Payment:PaymentsModel
  text: string;

  ngOnInit(){
    console.log('payment',this.Payment)
  }
  constructor() {
    console.log('Hello PaymentItemListComponent Component');
    this.text = 'Hello World';
  }

}
