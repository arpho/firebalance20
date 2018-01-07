import { Component, Input, OnInit, OnDestroy,ChangeDetectionStrategy } from '@angular/core';
import { PaymentsProvider } from '../../providers/payments/payments';
import { Observable } from 'rxjs/Observable';
import { PaymentsModel } from '../../models/payment.model';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the PaymentsChipComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payments-chip',
  templateUrl: 'payments-chip.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentsChipComponent implements OnInit, OnDestroy {
  @Input() PaymentId: string;
  Payment: Observable<PaymentsModel>
  subscription: Subscription;

  text: string;
  //chiudo la sottoscrizione
  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }
  ngOnInit() {
    this.subscription = this.Payments.getPaymentById(this.PaymentId, obs => this.Payment = obs)

  }
  constructor(
    public Payments: PaymentsProvider
  ) {
    console.log('Hello PaymentsChipComponent Component');
    this.text = 'Hello World payment chip';
  }

}
