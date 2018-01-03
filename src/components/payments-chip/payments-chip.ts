import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import { PaymentsProvider } from '../../providers/payments/payments';
import { Observable } from 'videogular2/node_modules/rxjs/Observable';
import { PaymentsModel } from '../../models/payment.model';
import { Subscription } from 'videogular2/node_modules/rxjs/Subscription';

/**
 * Generated class for the PaymentsChipComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payments-chip',
  templateUrl: 'payments-chip.html'
})
export class PaymentsChipComponent implements OnInit,OnDestroy{
  @Input()PaymentId: string;
  Payment:Observable<PaymentsModel>
  subscription:Subscription;

  text: string;
  //chiudo la sottoscrizione
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }
 ngOnInit(){
   console.log('payment',this.PaymentId)
   this.Payments.getPaymentById(this.PaymentId,obs=>this.Payment=obs)

 }
  constructor(
    public Payments:PaymentsProvider
  ) {
    console.log('Hello PaymentsChipComponent Component');
    this.text = 'Hello World payment chip';
  }

}
