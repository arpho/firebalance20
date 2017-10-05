import { Injectable, OnInit } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import { ListingModel } from '../pages/listing/listing.model';
import { ProfileService } from '../profile/profile.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class CategoriesService {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    private User: ProfileService) {

    /*this.getCategories().subscribe(data => {
      this.categories = data;
    })*/
  }
  public categories: FirebaseListObservable<any>



  fetchCategoryById(id: string) {
    return this.afDB.list('categorie/' + this.User.getUserUid() + '/' + id);
  }

  getCategories() {
    return this.afDB.list('categorie/' + this.User.getUserUid());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  pushNewCategory(categoria) {
    return this.afDB.list('categorie/' + this.User.getUserUid()).push(categoria);
  }
  updateCategory(categoria) {
    this.afDB.list('categorie/' + this.User.getUserUid()).update(categoria.$key, categoria)
  }
  trashCategory(categoria) {
    this.afDB.list('categorie/' + this.User.getUserUid()).remove(categoria.$key).then(e => {
    });
  }
  pushCategoryIfNotExist(category) {
    const then = (next: (a:any)=>any) => {
      const key: string = this.categories.filter(x => x.title == category)[0].$key;
      next({"key":key});
    }


    if (!this.categories.filter(x => x.title == category)[0]) // la categoria non esiste, la creo
      return this.pushNewCategory({ "title": category });
    else
      return {
        "then": then /* se la categoria è già presente devo ritornare sua key  devo simulare la stessa signature di pushNewCategory 
        cioè dovrebbe essere una thenable, mi accontento di questa forma*/

      }

    }
  }



  