import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CategoriesService } from './categories.service';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { CategoriesSelectorPage } from '../categories-selector/categories-selector';
import {AngularFireList} from 'angularfire2/database'

/**
 * Generated class for the CategoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: any;
  newCategory: any;
  segnaposto: string;
  category_id: string;
  categories_id: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Categories: CategoriesService,
    public modal: ModalController
  ) {
    this.segnaposto = "filtra categoria";
    this.category_id = "-Ks0UbaDoqhXN1yoyKNP";
    this.categories_id = new Array<string>();
    this.categories_id.push("-Ks0UdZGtzunNoCmGGJd");
    this.categories_id.push("-Ks0VR4z3gZTXtwqTZ-V");
    this.categories_id.push("-Ks0UbaDoqhXN1yoyKNP");
    /*this.Categories.fetchCategoryById(this.category_id).subscribe(cat => {
    })*/
    this.Categories.getCategories();
    this.newCategory = "";

  }

  categoriesSelector() {

    /*let modal = this.modal.create(CategoriesSelectorPage, this.categories_id);
    modal.onDidDismiss(values => {
      console.log('modal dismissed', values);
    })
    modal.present();*/
  }
  selectedCategories(val) {
    //console.log('selectedCategories', val);
    this.categories_id = val;
    //this.categories.publish(val);
    //console.log('published categories', val);

  }

  selectCategory(key) {
    //console.log('selected category', key); 
    this.categories_id.push(key); //aggiungo la nuova categoria 
  }

  setFilterString(categoria) {
    if (categoria)
      this.newCategory = categoria;
  }

  clicked(val) {
    console.log('clicked received', val);
  }

  showCategory(categoria): Boolean {
    var re = new RegExp(this.newCategory, 'i');
    if (this.newCategory) { //console.log('match',categoria.title.match(re))
      return categoria.title.match(re) != null;
    }
    else
      return true;

  }


  createCategory() {
    var categoria = { "title": this.newCategory };
    this.Categories.pushNewCategory(categoria).then(o => {
      this.newCategory = "";
    });
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }



}
