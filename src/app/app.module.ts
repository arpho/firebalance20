
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
//import { BehaviorSubject} from 'rxjs/BehaviorSubject'; ProviderSelectorPage
import { ListingPage } from '../pages/listing/listing';
import { FeedPage } from '../pages/feed/feed';
import { ShoppingCartsPage } from '../pages/shopping-carts/shopping-carts';
import { DetailShoppingCartPage } from '../pages/detail-shopping-cart/detail-shopping-cart';
import { FollowersPage } from '../pages/followers/followers';
import { LayoutsPage } from '../pages/layouts/layouts';
import { FormsPage } from '../pages/forms/forms';
import { ProviderSelectorPage } from '../pages/provider-selector/provider-selector';
import { PaymentSelectorPage } from '../pages/payment-selector/payment-selector';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { ProvidersPage } from '../pages/providers/providers';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SchedulePage } from '../pages/schedule/schedule';
import { AdsPage } from '../pages/ads/ads';
import { List1Page } from '../pages/list-1/list-1';
import { List2Page } from '../pages/list-2/list-2';
import { GridPage } from '../pages/grid/grid';
import { FormLayoutPage } from '../pages/form-layout/form-layout';
import { FiltersPage } from '../pages/filters/filters';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { FormValidationsPage } from '../pages/form-validations/form-validations';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoriesService } from '../pages/categories/categories.service';
import { PaymentPage } from '../pages/payment/payment'
import { CreatePaymentPage } from '../pages/create-payment/create-payment';
import { CreateProviderPage } from '../pages/create-provider/create-provider';
import { UpdatePaymentPage } from '../pages/update-payment/update-payment'
import { UpdateProviderPage } from '../pages/update-provider/update-provider'
import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
import { GoogleMap } from '../components/google-map/google-map';
import { AlertController } from 'ionic-angular';
import { FeedService } from '../pages/feed/feed.service';
import { ListingService } from '../pages/listing/listing.service';
import { ProfileService } from '../pages/profile/profile.service';
import { NotificationsService } from '../pages/notifications/notifications.service';
import { List1Service } from '../pages/list-1/list-1.service';
import { List2Service } from '../pages/list-2/list-2.service';
import { ScheduleService } from '../pages/schedule/schedule.service';
import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
import { GoogleLoginService } from '../pages/google-login/google-login.service';
import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
import { GoogleMapsService } from '../pages/maps/maps.service';
import { UserModel } from '../pages/profile/profile.model'

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';
import { Toast } from '@ionic-native/toast';
// Functionalities
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { MapsPage } from '../pages/maps/maps';
import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
import { GoogleLoginPage } from '../pages/google-login/google-login';
import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
import { ContactCardPage } from '../pages/contact-card/contact-card';
import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';

import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';

import { LanguageService } from '../providers/language/language.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SuiModule } from 'ng2-semantic-ui';
import { AuthService } from '../providers/auth/auth';
import { UtilitiesProvider } from '../providers/utilities/utilities';
import { CategoriesProvider } from '../providers/categories/categories';
import { CategoriesListComponent } from '../components/categories-list/categories-list';
import { CategoriesListItemComponent } from '../components/categories-list-item/categories-list-item';
import { ShoppingCartsProvider } from '../providers/shopping-carts/shopping-carts';
import { CategoryCounterComponent } from '../components/category-counter/category-counter';
import { CategorySumComponent } from '../components/category-sum/category-sum';
import { PaymentsProvider } from '../providers/payments/payments';
import { PaymentListComponent } from '../components/payment-list/payment-list';
import { PaymentItemListComponent } from '../components/payment-item-list/payment-item-list';
import { FilterFactoryProvider } from '../providers/filter-factory/filter-factory';
import { ProvidersListComponent } from '../components/providers-list/providers-list';
import { ProvidersItemListComponent } from '../components/providers-item-list/providers-item-list';
import { ProvidersProvider } from '../providers/providers/providers';
import { SwitchTextPipe } from '../pipes/switch-text/switch-text';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { ProvidersTotalComponent } from '../components/providers-total/providers-total';
import { ShoppingCartsListComponent } from '../components/shopping-carts-list/shopping-carts-list';
import { ShoppingCartsItemListComponent } from '../components/shopping-carts-item-list/shopping-carts-item-list';
import { ShoppingCartDetailComponent } from '../components/shopping-cart-detail/shopping-cart-detail';
import { PurchaisedListComponent } from '../components/purchaised-list/purchaised-list';
import { PurchaisedItemComponent } from '../components/purchaised-item/purchaised-item';
import { ProvidersChipComponent } from '../components/providers-chip/providers-chip';
import { PaymentsChipComponent } from '../components/payments-chip/payments-chip';
import { FieldFilterComponent } from '../components/field-filter/field-filter';
import { SelectorComponent } from '../components/selector/selector';
import { ListItemComponent } from '../components/list-item/list-item';
import { ItemsListComponent } from '../components/items-list/items-list';
import { FilterItemsPipe } from '../pipes/filter-items/filter-items';
import { DistanceSorterPipe } from '../pipes/distance-sorter/distance-sorter';

import { ItemViewPage } from '../pages/item-view/item-view';
import { ItemCreatePage } from '../pages/item-create/item-create'
import { DateSorterPipe } from '../pipes/date-sorter/date-sorter';
import { TotaleSpesaComponent } from '../components/totale-spesa/totale-spesa';
import { ItemDetailComponent } from '../components/item-detail/item-detail';
import { DiscountComponent } from '../components/discount/discount';
//import { PaymentProvider } from '../providers/payment/payment';
//AngularFireModule.initializeApp(environment.firebaseConfig)
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    ListingPage,
    ShoppingCartsPage,
    DetailShoppingCartPage,
    FeedPage,
    FollowersPage,
    LayoutsPage,
    FormsPage,
    LoginPage,
    NotificationsPage,
    ProfilePage,
    CreatePaymentPage,
    ProvidersPage,
    ProviderSelectorPage,
    PaymentSelectorPage,
    UpdatePaymentPage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    SignupPage,
    ForgotPasswordPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    MapsPage,
    FunctionalitiesPage,
    ItemCreatePage,
    ItemViewPage,
    FacebookLoginPage,
    GoogleLoginPage,
    ContactCardPage,
    TwitterLoginPage,
    AdsPage,
    UpdateProviderPage,
    CreateProviderPage,
    CategoriesPage,

    PaymentPage,
    FormValidationsPage,
    VideoPlaylistPage,

    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    GoogleMap,
    CategoriesListComponent,
    CategoriesListItemComponent,
    CategoryCounterComponent,
    CategorySumComponent,
    PaymentListComponent,
    PaymentItemListComponent,
    ProvidersListComponent,
    ProvidersListComponent,
    ProvidersListComponent,
    ProvidersItemListComponent,
    SwitchTextPipe,
    ProvidersTotalComponent,
    ShoppingCartsListComponent,
    ShoppingCartsItemListComponent,
    ShoppingCartDetailComponent,
    PurchaisedListComponent,
    PurchaisedItemComponent,
    ProvidersChipComponent,
    PaymentsChipComponent,
    FieldFilterComponent,
    SelectorComponent,
    ListItemComponent,
    ItemsListComponent,
    FilterItemsPipe,
    DistanceSorterPipe,
    DateSorterPipe,
    TotaleSpesaComponent,
    ItemDetailComponent,
    DiscountComponent
  ],
  imports: [
    SuiModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListingPage,
    ShoppingCartsPage,
    DetailShoppingCartPage,
    FeedPage,
    FollowersPage,
    LayoutsPage,
    FormsPage,
    LoginPage,
    NotificationsPage,
    ProfilePage,
    CreatePaymentPage,
    CreateProviderPage,
    ProvidersPage,
    PaymentSelectorPage,
    ProviderSelectorPage,
    UpdatePaymentPage,
    UpdateProviderPage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    ForgotPasswordPage,
    SignupPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    MapsPage,
    FunctionalitiesPage,
    ItemCreatePage,
    ItemViewPage,
    FacebookLoginPage,
    GoogleLoginPage,
    ContactCardPage,
    TwitterLoginPage,
    AdsPage,
    CategoriesPage,
    PaymentPage,
    FormValidationsPage,
    VideoPlaylistPage
  ],
  providers: [
    //BehaviorSubject,
    AlertController,
    { provide: "GoogleKey", useValue: environment.googleKey },
    { provide: "FIREBASE_CONFIG", useValue: environment.firebaseConfig },
    { provide: "OutpanKey", useValue: environment.outpanKey },
    { provide: "production", useValue: environment.production },
    { provide: "emailDev", useValue: environment.emailDev },
    { provide: "passwordDev", useValue: environment.passwordDev },
    Toast,
    AngularFireDatabase,
    UserModel,
    AngularFireAuth,
    AuthService,
    CategoriesService,
    FeedService,
    ListingService,
    ProfileService,
    NotificationsService,
    List1Service,
    List2Service,
    ScheduleService,

    FacebookLoginService,
    GoogleLoginService,
    TwitterLoginService,
    GoogleMapsService,
    LanguageService,

    SplashScreen,
    StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
    AdMobFree,
    AppRate,
    ImagePicker,
    Crop,
    EmailComposer,
    UtilitiesProvider,
    UtilitiesProvider,
    CategoriesProvider,
    ShoppingCartsProvider,
    PaymentsProvider,
    UtilitiesProvider,
    FilterFactoryProvider,
    ProvidersProvider,
    GeolocationProvider,
    //PaymentProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
