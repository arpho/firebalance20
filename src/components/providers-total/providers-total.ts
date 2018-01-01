import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Observable } from 'rxjs/Observable';
import { ProviderModel } from '../../models/providers/provider.model';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ShoppingCartsProvider } from '../../providers/shopping-carts/shopping-carts';

/**
 * Generated class for the ProvidersTotalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-total',
  templateUrl: 'providers-total.html'
})
export class ProvidersTotalComponent implements OnInit, OnChanges {
  @Input() ProviderKey: string;
  @Input() shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean;
  text: string;
  total: number;

  ngOnChanges(changes: SimpleChanges) {
    //this.totale = this.Providers.calculateTotal(this.shoppingCartDateFilter, this.ProviderKey)
    this.newMethod();
  }
  private newMethod() {
    this.Providers.calculateTotal(this.shoppingCartDateFilter, this.ProviderKey, (total: ShoppingCartModel) => {
      this.total = total.totale;
    });
  }

  ngOnInit() {
    this.newMethod()
  }

  constructor(
    public Providers: ProvidersProvider,
    Carts: ShoppingCartsProvider
  ) {
    this.text = 'Hello World';
  }

}
