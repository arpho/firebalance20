import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationProvider } from '../../providers/geolocation/geolocation'
import * as _ from 'lodash'
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
  public busy: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Providers: ProvidersProvider,
    public Commons: UtilitiesProvider,
    public view: ViewController,
    public actionSheetCtrl: ActionSheetController,
    private geolocation: GeolocationProvider,
    fb: FormBuilder,
  ) {
    this.busy = false;
    console.log('navparams', navParams)
    this.provider = navParams.data
    this.providerForm = fb.group({
      nome: new FormControl(navParams.get('nome')),
      note: new FormControl(navParams.get('note')),
      key: new FormControl(navParams.get('key')),
      indirizzo: new FormControl(navParams.get('indirizzo')),
      latitudine: new FormControl(navParams.get('longitudine')),
      longitudine: new FormControl(navParams.get('longitudine')),
      onLine: new FormControl(navParams.get('onLine'))
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

  makeHandler(text) {
    return {
      text: text,
      handler: () => {
        this.providerForm.controls.indirizzo.setValue(text);
        console.log('selected addreess', text)
      }
    }
  }
  locate() {
    this.busy = true;
    this.geolocation.locate().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp, this.providerForm)
      this.providerForm.controls.latitudine.setValue(resp.coords.latitude);
      this.providerForm.controls.longitudine.setValue(resp.coords.longitude);
      this.geolocation.inverseGeoLocation(resp.coords.latitude, resp.coords.longitude).subscribe(address => {
        const buttons = [];
        this.busy = false;
        address.json().results;
        _.each(address.json().results, item => {

          buttons.push(this.makeHandler(item.formatted_address))
        })
        let actionSheet = this.actionSheetCtrl.create({
          title: 'limita a ',
          enableBackdropDismiss: true,
          buttons: buttons
        });
        actionSheet.present()
      })
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  dismiss() {
    this.view.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProviderPage');
  }

}
