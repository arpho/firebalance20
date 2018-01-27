import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CreateProviderPage } from '../../pages/create-provider/create-provider';

/**
 * Generated class for the ProviderSelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-provider-selector',
  templateUrl: 'provider-selector.html',
})
export class ProviderSelectorPage {
  filterString: string;
  provider: boolean = true;
  component: string = "fornitore"
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    public modal: ModalController,
  ) {
  }
  selected(item) {
    this.view.dismiss({ itemId: item })
  }

  dismiss(data?) {
    this.view.dismiss({ itemId: data });

  }
  create() {
    let modal = this.modal.create(CreateProviderPage)
    modal.onDidDismiss(data => {
      this.dismiss(data)
    })
    modal.present()
  }


  doFilter(filterString) {
    this.filterString = filterString.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderSelectorPage');
  }

}
