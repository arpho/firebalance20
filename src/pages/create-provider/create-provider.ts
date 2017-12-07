
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';
import { ProvidersProvider } from '../../providers/providers/providers';

/**
 * Generated class for the CreateProviderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-provider',
  templateUrl: 'create-provider.html',
})
export class CreateProviderPage {
  public providerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,
    public Providers: ProvidersProvider,
    public view: ViewController) {
    this.providerForm = fb.group({
      nome: new FormControl(navParams.get('nome')),
      note: new FormControl(navParams.get('note')),
      key: new FormControl(navParams.get('key')),
      indirizzo: new FormControl(navParams.get('indirizzo')),
      latitudine: new FormControl(navParams.get('longitudine')),
      longitudine: new FormControl(navParams.get('longitudine')),
      onLine: new FormControl(false)
    },
      Validators.required);
  }

  dismiss() {
    this.view.dismiss();
  }

  create(provider) {
    const Provider = new ProviderModel().buildFromActiveForm(provider.controls)
    this.Providers.create(Provider, result => {
      console.log('rersult push', result)
      this.dismiss()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProviderPage');
  }

}
