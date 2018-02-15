import { Component,ChangeDetectionStrategy,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { CategoriesProvider } from '../../providers/categories/categories';

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
export class CategorySelectorPage implements OnInit{
                                                                    

  constructor(public navCtrl: NavController, public navParams: NavParams,public Categories:CategoriesProvider,
    public view: ViewController) {
  }

  Selected(id){
    console.log('selected',id)
  }
  ngOnInit(){
console.log('ricevuto',this.navParams.data)
/*
 this.Categories.subscribeSubjectCategoriesRef(ref => {
  console.log('ref',ref)
  if (ref) {
    ref.on('value', categoriesSnapshot => {

      

      categoriesSnapshot.forEach(snap => {
       // const categoria = new Category({ title: snap.val().title, $key: snap.key })
       
        return false;
      })
    });
  }
})*/
  }


  

  dismiss() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorySelectorPage');
  }

}
