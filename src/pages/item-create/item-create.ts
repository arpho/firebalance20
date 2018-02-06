import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ItemModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the ItemCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html',
})
export class ItemCreatePage {
  item:ItemModel

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController
  ) {

    this.item = this.navParams.data
  }


  Done(item){
    console.log('done',item)
    delete item.component //sanitizing
    this.view.dismiss(item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreatePage');
  }

}
