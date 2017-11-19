import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { PaymentsModel } from '../../models/payment.model';
import { PaymentsProvider } from '../../providers/payments/payments';

/**
 * Generated class for the UpdatePaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-payment',
  templateUrl: 'update-payment.html',
})
export class UpdatePaymentPage {
  public paymentForm: FormGroup;
  Payment:PaymentsModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Payments:PaymentsProvider,
    fb: FormBuilder,
    public view: ViewController
  ) {
    console.log('params',this.navParams);
    this.Payment = this.navParams.data;
    console.log('Payment',this.Payment)
    this.paymentForm = fb.group({
      addebito: new FormControl(this.Payment.addebito),
      nome: new FormControl(this.Payment.nome),
      note: new FormControl(this.Payment.note),
      key: new FormControl(this.Payment.key)
    }, Validators.required);
  }

  updatePayment(payment){
    const Payment = new PaymentsModel(payment.controls)
    console.log('pagamento',Payment)
    this.Payments.updatePayment(Payment,err=>{
      console.log('errore in modifica',err)
      this.view.dismiss();
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePaymentPage');
  }

}
