import { Injectable, Inject, } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeolocationProvider {
  public googleKey: string;
  private LocationObserver:BehaviorSubject<{latitude:number,longitude:number}>
  locate() {
    const options = {enableHighAccuracy: true}
    return this.geolocation.getCurrentPosition(options)
    
  }

  subScribeLocation(cb:(coords)=>any){
    return this.LocationObserver.subscribe(cb)
  }

  makeUrl(lat, long) {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat).concat(",").concat(long).concat("&key=").concat(this.googleKey);
  }

  inverseGeoLocation(lat, long) {
    var url = this.makeUrl(lat, long)
    return this.http.get(url);
  }
  
  distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  refreshLocation(){
    return this.locate()

  }

  

  constructor(public http: Http,

    @Inject('GoogleKey') public GoogleKey,
    private geolocation: Geolocation
  ) {
    this.LocationObserver = new BehaviorSubject<{latitude:number,longitude:number}>(null)
      this.googleKey = GoogleKey;

      
    }  }