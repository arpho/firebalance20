import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }
  selected(item) {
    console.log('got', item)
    this.view.dismiss({ itemId: item })
  }

  dismiss() {
    this.view.dismiss();

  }


  doFilter(filterString) {
    console.log('filterString', filterString)
    this.filterString = filterString.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderSelectorPage');
  }

}
