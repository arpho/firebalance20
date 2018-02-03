import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the ItemViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item-view',
  templateUrl: 'item-view.html',
})
export class ItemViewPage {
  item:ItemModel

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('item',this.navParams.data)
    this.item = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemViewPage');
  }

}
