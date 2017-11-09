import { AlertController } from 'ionic-angular/es2015';
import { snapshotChanges } from 'angularfire2/database/public_api';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { CategoriesSelectorPage } from '../categories-selector/categories-selector';
import { AngularFireList } from 'angularfire2/database';
import Rx from 'rxjs/Rx';
import { Category } from './categories.model';


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
  Categorie: any;
  newCategory: any;
  segnaposto: string;
  category_id: string;
  categories_id: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController,
    public Categories: CategoriesProvider,
    //public alertCtrl:AlertController
  ) {
    this.segnaposto = "filtra categoria";
    this.category_id = "-Ks0UbaDoqhXN1yoyKNP";
    this.categories_id = new Array<string>();
    this.categories_id.push("-Ks0UdZGtzunNoCmGGJd");
    this.categories_id.push("-Ks0VR4z3gZTXtwqTZ-V");
    this.categories_id.push("-Ks0UbaDoqhXN1yoyKNP");
    this.Categories.subscribeSubjectCategoriesRef(ref => {
      if (ref){
        ref.on('value', categoriesSnapshot => {

          this.Categorie = [];

          categoriesSnapshot.forEach(snap => {
            const categoria = new Category({ title: snap.val().title, $key: snap.key })
            this.Categorie.push(categoria);
            return false;
          })
        });
      }
    })
    this.newCategory = "";

  }
  search() {
    console.log('search');

  }

  categoriesSelector() {

  }
  selectedCategories(val) {
    this.categories_id = val;

  }

  selectCategory(key) {
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
    if (this.newCategory) {
      return categoria.title.match(re) != null;
    }
    else
      return true;

  }


  createCategory() {
    var categoria = { "title": this.newCategory };
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }



}
