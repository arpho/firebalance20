import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
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
  templateUrl: 'providers-total.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProvidersTotalComponent implements OnInit, OnChanges {
  @Input() ProviderKey: string;
  @Input() shoppingCartDateFilter: (cart: ShoppingCartModel) => boolean;
  text: string;
  total: number;
  totalObservable: Observable<ShoppingCartModel>

  ngOnChanges(changes: SimpleChanges) {
    this.getTotal()
  }
  getTotal() {
    this.Carts.shoppingCartSubject.subscribe(carts => {
      if (carts)
        carts.filter(this.shoppingCartDateFilter).isEmpty().subscribe(empty => {
          if (!empty)
            this.totalObservable = carts.filter(this.shoppingCartDateFilter).scan((acc, x) => {
              if (x.fornitoreId == this.ProviderKey)
                acc.totale += x.totale
              return acc;
            }, new ShoppingCartModel())
        })
    })
  }

  ngOnInit() {
    this.getTotal()
  }

  constructor(
    public Providers: ProvidersProvider,
    public Carts: ShoppingCartsProvider
  ) {
    this.text = 'Hello World';
  }

}
