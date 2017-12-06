import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';

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
  provider:ProviderModel;
  public providerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    fb: FormBuilder,
  ) {
    console.log('navparams',navParams)
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProviderPage');
  }

}
