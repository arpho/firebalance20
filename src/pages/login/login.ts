import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { Component,Inject } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { FacebookLoginService } from '../facebook-login/facebook-login.service';
import { GoogleLoginService } from '../google-login/google-login.service';
import { TwitterLoginService } from '../twitter-login/twitter-login.service';
import {AuthService} from '../../providers/auth/auth';
import {ProfileService} from '../profile/profile.service';


@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;


  constructor(
    @Inject('production') public Production,
    @Inject('emailDev') public emailDev,
    @Inject('passwordDev') public passwordDev,
    public nav: NavController,
    public Utilities: UtilitiesProvider,
    public facebookLoginService: FacebookLoginService,
    public googleLoginService: GoogleLoginService,
    public twitterLoginService: TwitterLoginService,
    public loadingCtrl: LoadingController,
    public Auth:AuthService,
    public Profiles:ProfileService,
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      email: new FormControl(!this.Production?this.emailDev:'', Validators.required),
      password: new FormControl(!this.Production?this.passwordDev:'', Validators.required)
    });
  }

  doLogin(){
    console.log('doing login',this.login.controls.email.value,this.login.controls.password.value)
    this.Auth.login(this.login.controls.email.value, this.login.controls.password.value).then(a=>{this.Profiles.setUser(a)
    console.log('logged',this.Profiles.getUser())
    })
    this.nav.setRoot(this.main_page.component);
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    // let this = this;

    this.facebookLoginService.getFacebookUser()
    .then((data) => {
       // user is previously logged with FB and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.facebookLoginService.doFacebookLogin()
      .then((res) => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      }, (err) => {
        console.log("Facebook Login error", err);
      });
    });
  }

  doGoogleLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

    this.googleLoginService.trySilentLogin()
    .then((data) => {
       // user is previously logged with Google and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.googleLoginService.doGoogleLogin()
      .then((res) => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      }, (err) => {
        console.log("Google Login error", err);
      });
    });
  }

  doTwitterLogin(){
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

    this.twitterLoginService.getTwitterUser()
    .then((data) => {
       // user is previously logged with FB and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.twitterLoginService.doTwitterLogin()
      .then((res) => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      }, (err) => {
        console.log("Twitter Login error", err);
      });
    });
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

}
