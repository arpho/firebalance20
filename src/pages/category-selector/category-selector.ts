import { Component,ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * 
 * Generated class for the CategorySelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-selector',
  templateUrl: 'category-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySelectorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController) {
  }


  dismiss() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorySelectorPage');
  }

}
