
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationProvider } from '../../providers/geolocation/geolocation'
import * as _ from 'lodash'
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
  public busy:boolean
  public listaIndirizzi: [string];
  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,
    public Providers: ProvidersProvider,
    private geolocation: GeolocationProvider,
    public actionSheetCtrl: ActionSheetController,
    public view: ViewController) {
      this.busy= false;
    this.providerForm = fb.group({
      nome: new FormControl(navParams.get('nome')),
      note: new FormControl(navParams.get('note')),
      key: new FormControl(navParams.get('key')),
      indirizzo: new FormControl(navParams.get('indirizzo')),
      altitude:new FormControl(navParams.get('altitude')),
      latitudine: new FormControl(navParams.get('longitudine')),
      longitudine: new FormControl(navParams.get('longitudine')),
      onLine: new FormControl(false)
    },
      Validators.required);
  }

  locate() {
      this.busy = true;

    this.geolocation.locate().then((resp) => {
      this.busy = true;
      // resp.coords.latitude
      // resp.coords.longitude
      //coords.se = resp.coords.latitude
      this.providerForm.controls.latitudine.setValue(resp.coords.latitude);
      this.providerForm.controls.longitudine.setValue(resp.coords.longitude);
      this.geolocation.inverseGeoLocation(resp.coords.latitude, resp.coords.longitude).subscribe(address => {
        this.busy = false;
        this.listaIndirizzi = [''];
        const buttons = [];
        address.json().results;
        _.each(address.json().results, item => {
          
          this.listaIndirizzi.push(item.formatted_address)
          buttons.push({
            text: item.formatted_address,
            handler: () => {
              this.providerForm.controls.indirizzo.setValue(item.formatted_address);
            }
          })
        })
        let actionSheet = this.actionSheetCtrl.create({
          title: 'seleziona un indirizzo',
          enableBackdropDismiss: true,
          buttons: buttons
        });
        actionSheet.present()
      })
    }).catch((error) => {
      this.busy= false
      console.log('Error getting location', error);
    });
  }
  dismiss(data?) {
    this.view.dismiss(data);
  }

  create(provider) {
    const Provider = new ProviderModel().buildFromActiveForm(provider.controls)
    this.Providers.create(Provider, result => {
      console.log('result createProvider',result)
      this.dismiss(result.key)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProviderPage');
  }

}
