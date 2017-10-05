import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { FacebookUserModel } from './facebook-user.model';


@Injectable()
export class FacebookLoginService {
  FB_APP_ID: number = 826720427470540;

  constructor(
    public http: Http,
    public nativeStorage: NativeStorage,
    public fb: Facebook
  ){
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  doFacebookLogin()
  {
    return new Promise<FacebookUserModel>((resolve, reject) => {
      //["public_profile"] is the array of permissions, you can add more if you need
      this.fb.login(["public_profile"]).then((response) => {
        //Getting name and gender properties
        this.fb.api("/me?fields=name,gender", [])
        .then((user) => {
          //now we have the users info, let's save it in the NativeStorage
          this.setFacebookUser(user)
          .then((res) => {
            resolve(res);
          });
        })
      }, (err) => {
        reject(err);
      });
    });
  }

  doFacebookLogout()
  {
    return new Promise((resolve, reject) => {
      this.fb.logout()
      .then((res) => {
        //user logged out so we will remove him from the NativeStorage
        this.nativeStorage.remove('facebook_user');
        resolve();
      }, (err) => {
        reject();
      });
    });
  }

  getFacebookUser()
  {
    return this.nativeStorage.getItem('facebook_user');
  }

  setFacebookUser(user: any)
  {
    return new Promise<FacebookUserModel>((resolve, reject) => {
      this.getFriendsFakeData()
      .then(data => {
        resolve(this.nativeStorage.setItem('facebook_user',
          {
            userId: user.id,
            name: user.name,
            gender: user.gender,
            image: "https://graph.facebook.com/" + user.id + "/picture?type=large",
            friends: data.friends,
            photos: data.photos
          })
        );
      });
    });
  }

  getFriendsFakeData(): Promise<FacebookUserModel> {
    return this.http.get('./assets/example_data/social_integrations.json')
     .toPromise()
     .then(response => response.json() as FacebookUserModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
