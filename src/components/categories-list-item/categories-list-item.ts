import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Component, Input, OnInit,ChangeDetectionStrategy,OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../../pages/categories/categories.model';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the CategoriesListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-list-item',
  templateUrl: 'categories-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class CategoriesListItemComponent implements OnInit,OnDestroy {
  @Input() categoria: Category;
  @Input() shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean;
  text: string;
  public myForm: FormGroup;
  subscription:Subscription;
  constructor(
    public fb: FormBuilder,
    public Categories: CategoriesProvider
  ) {
    //console.log('categoria', this.categoria)
    this.text = 'Hello World';
  }

  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe()
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      categoria: new FormControl(this.newFunction())
    })

    this.myForm.controls['categoria'].valueChanges.debounceTime(1000).distinctUntilChanged()
      .subscribe(data => {
        console.log('dataChanges', data);
        this.Categories.update(data, this.categoria.id).then(d => {
          console.log('categoria aggionata', d)
          this.myForm.controls.categoria.markAsPristine(); // setto la form come vergine
        })
      })
  }

  private newFunction(): any {
    return this.categoria.title;
  }
}
