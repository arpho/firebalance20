import { Component,Input,OnChanges,SimpleChanges,OnInit } from '@angular/core';

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
  ngOnChanges(changes:SimpleChanges){
    console.log('changes',changes)
  }
  constructor() {
    console.log('Hello PaymentListComponent Component');
    this.text = 'Hello World payments-list component';
    console.log('paymentsList constructor',this.paymentsList)
    this.paymentsList= [];
  }

}
