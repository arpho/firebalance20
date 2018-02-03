import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController
  ) {
    this.item = this.navParams.data
    console.log('item',this.navParams.data)
  }
  Done(item){
    console.log('done',item)
    this.view.dismiss(item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemViewPage');
  }

}
