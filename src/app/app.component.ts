import { ProfileService } from '../pages/profile/profile.service';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';

//AngularFireModule.initializeApp(environment.firebaseConfig);
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { LoginPage } from '../pages/login/login';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { PaymentPage } from '../pages/payment/payment';
import {CategoriesPage} from '../pages/categories/categories';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ProvidersPage } from '../pages/providers/providers';
import {ShoppingCartsPage } from '../pages/shopping-carts/shopping-carts';


@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  rootPage: any = WalkthroughPage;
  // rootPage: any = FunctionalitiesPage;
  // rootPage: any = TabsNavigationPage;
  textDir: string = "ltr";

  pages: Array<{title: any, icon: string, component: any}>;
  pushPages: Array<{title: any, icon: string, component: any}>;

  constructor(
    public firebaseAuth: AngularFireAuth,
    platform: Platform,
    public Profiles:ProfileService,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController,
  ) {
    translate.setDefaultLang('it');
    translate.use('it');
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      const unsubscribe = this.firebaseAuth.auth.onAuthStateChanged(user =>{
        if(!user){
          console.log('authState changed',user);
          this.rootPage = LoginPage;
          unsubscribe();
        }
        else{
          this.Profiles.setUser(user);
          this.rootPage = TabsNavigationPage;
          unsubscribe();
        }
      })
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar')
        {
          platform.setDir('rtl', true);
          platform.setDir('ltr', false);
        }
        else
        {
          platform.setDir('ltr', true);
          platform.setDir('rtl', false);
        }
        Observable.forkJoin(
          this.translate.get('HOME'),
          this.translate.get('CATEGORIES'),
          this.translate.get('PAYMENTS'),
          this.translate.get('PROVIDERS'),
          this.translate.get('SHOPPINGCARTS'),
          this.translate.get('FUNCTIONALITIES'),
          this.translate.get('LAYOUTS'),
          this.translate.get('SETTINGS')
        ).subscribe(data => {
          this.pages = [
            { title: data[0], icon: 'home', component: TabsNavigationPage },
            { title: data[1], icon: 'pricetags', component: CategoriesPage },
            { title: data[2], icon: 'cash', component: PaymentPage }
          ];

          this.pushPages = [
            { title: data[3], icon: 'contacts', component: ProvidersPage },
            { title: data[4], icon: 'cart', component: ShoppingCartsPage }
          ];
        });
      });

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
}
