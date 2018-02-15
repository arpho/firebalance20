import { Component,ChangeDetectionStrategy,Input,OnDestroy,Output, EventEmitter } from '@angular/core';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Category } from '../../pages/categories/categories.model';
import { Subscription } from 'rxjs';

/**
 * Generated class for the AvailableCategoriesListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'available-categories-list',
  templateUrl: 'available-categories-list.html',
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class AvailableCategoriesListComponent implements OnDestroy{
 @Input() selectedCategories:string[]
 @Output() Selected:EventEmitter<string>= new EventEmitter<string>()
  text: string;
  Categorie: any;
  subscription:Subscription

  constructor(public Categories:CategoriesProvider) {
    console.log('Hello AvailableCategoriesListComponent Component');
    this.text = 'Hello World available categories';
   this.subscription= this.Categories.subscribeSubjectCategoriesRef(ref => {
      console.log('ref',ref)
      if (ref) {
        ref.on('value', categoriesSnapshot => {

          this.Categorie = [];

          categoriesSnapshot.forEach(snap => {
           // const categoria = new Category({ title: snap.val().title, $key: snap.key })
            this.Categorie.push(snap.key );
            return false;
          })
        console.log('categories',this.Categorie)
        });
      }
      else{
       // setTimeout(this.Categories.subscribeSubjectCategoriesRef(ref=>console.log('ref2',ref)))
       console.log('ref non va')
      }
    })
  }

  selected(id){
    console.log('selected',id)
    this.Selected.emit(id)
    
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
