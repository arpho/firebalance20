import { FilterFactoryProvider } from '../../providers/filter-factory/filter-factory';
import { PaymentsProvider } from '../../providers/payments/payments';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import {CreatePaymentPage} from '../create-payment/create-payment';
import { ActionSheetController } from 'ionic-angular'
import { ShoppingCartModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage implements OnInit {
  public paymentsList: any;
  public shoppingCartDateFilter:[(cart:ShoppingCartModel)=>boolean]
  public filterFunction:(doFilter:ShoppingCartModel)=>boolean
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController,
    public Filters:FilterFactoryProvider,
    public actionSheetCtrl: ActionSheetController,
    public Payments: PaymentsProvider
  ) {

  }

  ngOnInit() {
    this.Payments.getPaymentsArray(payments => {
      console.log('got payments', payments)
      this.paymentsList = payments;
    })
  }
  filter(){
    console.log('filter');
    let actionSheet = this.actionSheetCtrl.create({
      title: 'limita a ',
      enableBackdropDismiss:true,
      buttons: [
        {
          text: 'un giorno',
          handler: () => {
            console.log('un giorno clicked');
            this.shoppingCartDateFilter =[this.Filters.shoppingCartDateFilter(1,'dataAcquisto')];

            let today = new Date();
            //tomorrow = new Date(today.getTime()+ (1000*60*60*24))
            //this.filterFunction =(target:ShoppingCartModel)=>{return new Date(target.dataAddebito).getTime()>=today.setDate(today.getDate()-1).getTime()}
          }
        },
        {
          text: 'una settimana',
          handler: () => {
            console.log('una settimana clicked');
            this.shoppingCartDateFilter =[this.Filters.shoppingCartDateFilter(7,'dataAcquisto')];
          }
        },
        {
          text: 'un mese',
          handler: () => {
            console.log('un mese clicked');
            this.shoppingCartDateFilter =[this.Filters.shoppingCartDateFilter(30,'dataAcquisto')];
          }
        },
        {
          text: 'tre mesi',
          handler: () => {
            console.log('tre mesi clicked');
            this.shoppingCartDateFilter =[this.Filters.shoppingCartDateFilter(180,'dataAcquisto')];
          }
        },
        {
          text: 'un anno',
          handler: () => {
            console.log('un anno clicked');
            this.shoppingCartDateFilter =[this.Filters.shoppingCartDateFilter(365,'dataAcquisto')];
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present()
  }


  create(){
    let modal = this.modal.create(CreatePaymentPage);
    modal.present();
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
