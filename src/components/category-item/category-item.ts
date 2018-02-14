import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CategoriesProvider } from '../../providers/categories/categories';
import { Category } from '../../pages/categories/categories.model';

/**
 * Generated class for the CategoryItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-item',
  templateUrl: 'category-item.html'
})
export class CategoryItemComponent implements OnInit {
  @Input() CategoryId: string;
  text: string;
  Categoria: Category;

  constructor(public Categories: CategoriesProvider) {
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.Categories.getCategory(this.CategoryId).on('value', category => {
      this.Categoria = new Category().build(category.val().title, category.key)
    })
  }

}
