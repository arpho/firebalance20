import { Component, ChangeDetectionStrategy, OnInit, } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

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
export class CategorySelectorPage implements OnInit {
  subscription: Subscription;
  Categorie: string[]
  selectedCategories: string[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public Categories: CategoriesProvider,
    public view: ViewController) {
    this.subscription = this.Categories.subscribeSubjectCategoriesRef(ref => {
      console.log('ref', ref)
      if (ref) {
        ref.on('value', categoriesSnapshot => {

          this.Categorie = [];

          categoriesSnapshot.forEach(snap => {
            // const categoria = new Category({ title: snap.val().title, $key: snap.key })
            this.Categorie.push(snap.key);
            return false;
          })
        });
      }
      else {
        // setTimeout(this.Categories.subscribeSubjectCategoriesRef(ref=>console.log('ref2',ref)))
        console.log('ref non va')
      }
    })
  }

  Selected(id) {
    this.selectedCategories.push(id)
    this.selectedCategories = this.selectedCategories.filter(item => item) // cambio  il riferimento  cosìche venga rilevato il cambio
  }

  Removed(id) {
    this.selectedCategories = this.selectedCategories.filter(item => item != id)
  }

  done() {
    console.log('done', this.selectedCategories)
    this.view.dismiss(this.selectedCategories)
  }

  ngOnInit() {
    console.log('ricevuto', this.navParams.data.categories)
    if(this.navParams.data.categories)
      this.selectedCategories = this.navParams.data.categories
    console.log('selected categories',this.selectedCategories)
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
