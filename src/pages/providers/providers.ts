import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { ProvidersProvider } from '../../providers/providers/providers';
import { ProviderModel } from '../../models/providers/provider.model';

/**
 * Generated class for the ProvidersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-providers',
  templateUrl: 'providers.html',
})
export class ProvidersPage {
  public ProvidersList: Array<ProviderModel>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Providers: ProvidersProvider) {
    this.Providers.getProvidersArray(providers => {
      this.ProvidersList = providers;

    });
  }


  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
