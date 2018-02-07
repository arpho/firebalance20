import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { ItemModel } from '../../models/shoppingCart.model';

/**
 * Generated class for the ItemDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailComponent implements OnInit {
  @Output() Done: EventEmitter<ItemModel> = new EventEmitter<ItemModel>()
  text: string;
  categories: string[]
  @Input() item: ItemModel;
  ItemForm: FormGroup;
  constructor(
    public fb: FormBuilder,
  ) {
    this.text = 'Hello World';
  }

  done() {
    this.Done.emit(this.item)


  }

  ngOnInit() {
    this.ItemForm = this.fb.group({
      descrizione: new FormControl(this.item.descrizione),
      prezzo: new FormControl(this.item.prezzo),
      quantita: new FormControl(this.item.quantita),
      barcode: new FormControl(this.item.barcode)


    })

  }

}
