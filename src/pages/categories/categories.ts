import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { FilterFactoryProvider } from '../../providers/filter-factory/filter-factory';
import { AlertController } from 'ionic-angular/es2015';
import { snapshotChanges } from 'angularfire2/database/public_api';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActionSheetController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { CategoriesSelectorPage } from '../categories-selector/categories-selector';
import { AngularFireList } from 'angularfire2/database';
import Rx from 'rxjs/Rx';
import { Category } from './categories.model';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';


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
  filterText: string;
  shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController,
    public Filters: FilterFactoryProvider,
    public Utilities: UtilitiesProvider,
    public Categories: CategoriesProvider,
    public actionSheetCtrl: ActionSheetController,
    public Carts: ShoppingCartsProvider
    //public alertCtrl:AlertController
  ) {
    this.shoppingCartDateFilter = this.Filters.takeEmAll();
    this.segnaposto = "filtra categoria";
    this.category_id = "-Ks0UbaDoqhXN1yoyKNP";
    this.categories_id = new Array<string>();
    this.categories_id.push("-Ks0UdZGtzunNoCmGGJd");
    this.categories_id.push("-Ks0VR4z3gZTXtwqTZ-V");
    this.categories_id.push("-Ks0UbaDoqhXN1yoyKNP");
    this.Categories.subscribeSubjectCategoriesRef(ref => {
      if (ref) {
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

  filter() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'limita a ',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'da ieri',
          handler: () => {
            const days = 1;
            this.filterText = ' dal ' + this.Utilities.formatDate(this.Utilities.moveDaysBack(new Date(), days));
            this.shoppingCartDateFilter = this.Filters.shoppingCartDateFilter(days, 'dataAccredito');// clono shoppingCartDateFilte
          }
        },
        {
          text: 'oggi',
          handler: () => {
            const days = 0;
            this.filterText = ' dal ' + this.Utilities.formatDate(this.Utilities.moveDaysBack(new Date(), days));
            this.shoppingCartDateFilter = this.Filters.shoppingCartDateFilter(days, 'dataAccredito');// clono shoppingCartDateFilte
          }
        },
        {
          text: 'una settimana',
          handler: () => {
            const days = 7;
            this.filterText = ' dal ' + this.Utilities.formatDate(this.Utilities.moveDaysBack(new Date(), days));
            this.shoppingCartDateFilter = this.Filters.shoppingCartDateFilter(days, 'dataAcquisto');// clono shoppingCartDateFilter
          }
        },
        {
          text: 'un mese',
          handler: () => {
            const days = 30;
            this.filterText = ' dal ' + this.Utilities.formatDate(this.Utilities.moveDaysBack(new Date(), days));
            this.shoppingCartDateFilter = this.Filters.shoppingCartDateFilter(days, 'dataAcquisto');// clono shoppingCartDateFilter
          }
        },
        {
          text: 'tre mesi',
          handler: () => {
            const days = 90;
            this.filterText = ' dal ' + this.Utilities.formatDate(this.Utilities.moveDaysBack(new Date(), days));
            this.shoppingCartDateFilter = this.Filters.shoppingCartDateFilter(days, 'dataAcquisto')// clono shoppingCartDateFilter
          }
        },
        {
          text: 'un anno',
          handler: () => {
            const days = 365;
            this.filterText = ' dal ' + this.Utilities.formatDate(this.Utilities.moveDaysBack(new Date(), days));
            this.shoppingCartDateFilter = this.Filters.shoppingCartDateFilter(days, 'dataAcquisto');// clono shoppingCartDateFilter

          }
        },
        {
          text: 'dal primo acquisto registrato',
          role: 'cancel',
          handler: () => {
            this.Carts.getMin(this.Utilities.shoppingCartDateComparer, value => {
              this.filterText = ' dal ' + this.Utilities.formatDate(value.dataAcquisto);
            })
            this.shoppingCartDateFilter = this.Filters.takeEmAll();// resetto i filtri

          }
        }
      ]
    });
    actionSheet.present()
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
