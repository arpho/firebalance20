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
import {Category} from './categories.model';


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
    /*this.Categories.fetchCategoryById(this.category_id).subscribe(cat => {
    })*/
    
    console.log('ref cat',this.Categories.getCategories());
    this.Categories.subscribeSubjectCategoriesRef(ref=>{
      //console.log('sottoscritto ',ref);
      if(ref)
        ref.on('value',categoriesSnapshot=>{
        
          this.Categorie = []; // inizializzo la lista delle categorie
      //console.log('snap',categoriesSnapshot.val())
      //Rx.Observable.from(categoriesSnapshot)
      
      categoriesSnapshot.forEach(snap=>{
        //console.log("snap.val()",snap.val(),snap.key);
        const categoria = new Category({title:snap.val().title,$key:snap.key})
        this.Categorie.push(categoria);
        return false;
      })
      //const categoriesObservable = Observable.from(this.Categorie)
      //console.log('obsverbale',categoriesObservable);
      //this.Categorie = categoriesObservable;
      //console.log('categorie ready',this.Categorie)
       });
    })
   //this.Categories.getCategories().on
    this.newCategory = "";

  }
  search(){
    console.log('search');
   /* const alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log('login')
          }
        }
      ]
    });
    alert.present();*/
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
    /*this.Categories.pushNewCategory(categoria).then(o => {
      this.newCategory = "";
    });*/
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }



}
