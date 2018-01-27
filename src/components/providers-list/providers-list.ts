import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
import { ProviderModel } from '../../models/providers/provider.model';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';
import { UpdateProviderPage } from '../../pages/update-provider/update-provider';
import { CreateProviderPage } from '../../pages/create-provider/create-provider'
import { ProvidersProvider } from '../../providers/providers/providers';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
//import { UpdateProviderPage } from '../pages/update-provider';
/**
 * Generated class for the ProvidersListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-list',
  templateUrl: 'providers-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProvidersListComponent implements OnInit, OnDestroy {
  @Input() ProvidersList: Array<ProviderModel>
  @Input() shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean
  text: string;
  location: { latitude: number, longitude: number };
  subscription: Subscription
  update(provider: ProviderModel, slidingItem: ItemSliding,
  ) {
    slidingItem.close();
    let modal = this.modal.create(UpdateProviderPage, provider);
    modal.present()
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.geolocation.refreshLocation()
    this.subscription = this.geolocation.subScribeLocation(coords => {
      if (coords)
        this.location = { longitude: coords.longitude, latitude: coords.latitude }
    })
  }

  create() {
    let modal = this.modal.create(CreateProviderPage);
    modal.present()

  }
  delete(provider: ProviderModel, slidingItem: ItemSliding) {

    let alert = this.alertCtrl.create({
      title: 'Conferma Cancellazione',
      message: `Vuoi cancellare ${provider.nome}?`,
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            slidingItem.close();
          }
        },
        {
          text: 'Cancella',
          handler: () => {
            this.Providers.delete(provider, res => {
              this.utilities.showToast(`provider ${provider.nome} cancellato`,'2000','top')
            },fail=>{
              this.utilities.showToast(`qualcosa non è andata bene`,'1000','top')

            })
            slidingItem.close();

          }
        }
      ]
    });
    alert.present();
  }

  constructor(
    public modal: ModalController,
    public geolocation: GeolocationProvider,
    public Providers: ProvidersProvider,
    private alertCtrl: AlertController,
    private utilities:UtilitiesProvider
  ) {
  }

}
