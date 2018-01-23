import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,AlertController } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { ProvidersProvider } from '../../providers/providers/providers';
import { ProviderModel } from '../../models/providers/provider.model';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { FilterFactoryProvider } from '../../providers/filter-factory/filter-factory';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';

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
  filterText: string;
  public currentAlert: any;
  shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean;
  constructor(public navCtrl: NavController,
    public Filters: FilterFactoryProvider,
    public Utilities: UtilitiesProvider,
    public Carts: ShoppingCartsProvider,
    public alertCtrl:AlertController,
    public geolocation:GeolocationProvider,
    public actionSheetCtrl: ActionSheetController,
    public Providers: ProvidersProvider) {
    this.shoppingCartDateFilter = this.Filters.takeAllCarts();
    this.Carts.getMin(this.Utilities.shoppingCartDateComparer, value => {
      this.filterText = ' dal ' + this.Utilities.formatDate(value.dataAcquisto);
      
    })
    this.Providers.getProvidersArray(providers => {
      this.ProvidersList = providers;

    });
  }
  public clearAlert(): void {
    this.currentAlert.dismiss();//clears it
}


  filter() {
    
    const intervallo = {
      text:'intervallo',
      handler:this.Filters.alertAction(txt => this.filterText = txt,fn=>this.shoppingCartDateFilter= fn)() //la closure evita che alertController  subisca l'interferenza di actionSheetController 
      
    }
    let actionSheet = this.actionSheetCtrl.create({
      title: 'limita a ',
      enableBackdropDismiss: true,
      buttons: this.Filters.getFilterActionSheetsButtons(txt => this.filterText = txt, fn => this.shoppingCartDateFilter = fn,intervallo)
    });
    actionSheet.present()
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
