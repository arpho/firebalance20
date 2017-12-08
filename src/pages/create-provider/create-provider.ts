
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
  public listaIndirizzi: [string];
  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,
    public Providers: ProvidersProvider,
    private geolocation: GeolocationProvider,
    public actionSheetCtrl: ActionSheetController,
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

  locate() {

    this.geolocation.locate().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp, this.providerForm)
      this.providerForm.controls.latitudine.setValue(resp.coords.latitude);
      this.providerForm.controls.longitudine.setValue(resp.coords.longitude);
      this.geolocation.inverseGeoLocation(resp.coords.latitude, resp.coords.longitude).subscribe(address => {
        console.log('address', address.json())
        this.listaIndirizzi = [''];
        const buttons = [];
        address.json().results;
        _.each(address.json().results, item => {
          console.log("item", item.formatted_address)
          this.listaIndirizzi.push(item.formatted_address)
          buttons.push({
            text: item.formatted_address,
            handler: () => {
              this.providerForm.controls.indirizzo.setValue(item.formatted_address);
              console.log('selected addreess', item.formatted_address)
            }
          })
        })
        console.log("lista indirizzi", this.listaIndirizzi)
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
