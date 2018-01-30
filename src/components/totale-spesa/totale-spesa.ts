import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ItemModel } from '../../models/shoppingCart.model';
import { DiscountModel } from '../../models/discount.model';
import * as _ from 'lodash'

/**
 * Generated class for the TotaleSpesaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'totale-spesa',
  templateUrl: 'totale-spesa.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotaleSpesaComponent implements OnChanges {
  @Input() items: [ItemModel]
  @Input() sconto: DiscountModel
  @Input() moneta: string
  text: string;
  totale: number;

  constructor() {
    console.log('Hello TotaleSpesaComponent Component');
    this.text = 'Hello World';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items || changes.sconto) {
      this.totale = this.sconto.calculateDiscount(_.reduce(this.items, (total, item) => {
        return Number(total) + Number(item.prezzo)
      }, 0))
    }


  }

}
