import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Category} from  '../../pages/categories/categories.model';

/**
 * Generated class for the CategoriesListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-list-item',
  templateUrl: 'categories-list-item.html'
})
export class CategoriesListItemComponent implements OnInit {
  @Input() categoria: Category;
  text: string;
  public form: FormGroup
  constructor(
    public fb: FormBuilder,
  ) {
    //console.log('categoria', this.categoria)
    this.text = 'Hello World';
  }
  ngOnInit() {
    this.form = this.fb.group({
      categoria: new FormControl(this.categoria.title)
    }
    )
    //console.log('categ.', this.form.controls.categoria.value)
  }
}
