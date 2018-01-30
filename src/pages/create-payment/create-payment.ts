import { PaymentsProvider } from '../../providers/payments/payments';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PaymentsService } from '../payments/payments.service';
import { PaymentsModel } from '../../models/payment.model';
import { UtilitiesService } from '../../app/utilities.service';

/**
 * Generated class for the CreatePaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-payment',
  templateUrl: 'create-payment.html',
})
export class CreatePaymentPage {
  public paymentForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private Payments: PaymentsProvider,
    private Utilities: UtilitiesProvider,
    fb: FormBuilder,
    public view: ViewController) {
    this.paymentForm = fb.group({
      addebito: new FormControl(''),
      nome: new FormControl(''),
      note: new FormControl(''),
      key: new FormControl('')
    }, Validators.required);

  }

  dismiss() {
    this.view.dismiss();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePaymentPage');
  }
  createPayment(payment: any) {
    var Payment = new PaymentsModel(payment.controls);
    if (!Payment.key)

      this.Payments.pushNewPayment(Payment, err => {
        this.view.dismiss(err);// ritorno la chiave del pagamento creato al chiamante
      });

  }
}
