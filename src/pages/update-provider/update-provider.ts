import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the UpdateProviderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-provider',
  templateUrl: 'update-provider.html',
})
export class UpdateProviderPage {
  provider: ProviderModel;
  public providerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Providers: ProvidersProvider,
    public Commons: UtilitiesProvider,
    public view: ViewController,
    private geolocation: Geolocation,
    fb: FormBuilder,
  ) {
    console.log('navparams', navParams)
    this.provider = navParams.data
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
  update(provider) {
    console.log('modifica', provider);
    const Provider = new ProviderModel().buildFromActiveForm(provider.controls)
    console.log('provider', Provider);
    this.Providers.update(Provider, err => {
      this.dismiss()//chiudo il popup
      if (!err)
        this.Commons.showToast('Fornitore aggiornato', '5000', 'top', () => {
        })
      else
        console.log('errore on update', err);

    })
  }

  dismiss() {
    this.view.dismiss();
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProviderPage');
  }

}
