import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeolocationProvider {
  public googleKey: string;
  locate() {
    return this.geolocation.getCurrentPosition()
  }


  makeUrl(lat, long) {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat).concat(",").concat(long).concat("&key=").concat(this.googleKey);
  }

  inverseGeoLocation(lat, long) {
    var url = this.makeUrl(lat, long)
    return this.http.get(url);
  }

  constructor(public http: Http,

    @Inject('GoogleKey') public GoogleKey,
    private geolocation: Geolocation
  ) {
    this.googleKey = GoogleKey;
  }

}
