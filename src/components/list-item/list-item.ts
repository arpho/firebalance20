import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DbLayer } from '../../providers/DbLayer.interface';
import { PaymentsProvider } from '../../providers/payments/payments';
import { ProvidersProvider } from '../../providers/providers/providers';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProviderModel } from '../../models/providers/provider.model';
import { PaymentsModel } from '../../models/payment.model';

/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html',
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() fieldId: String;
  @Input() db: string;
  Dbs: { "fornitore": DbLayer, "pagamento": DbLayer }
  text: string;
  item: any
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldId)
      this.Dbs[this.db].getElementById(this.fieldId, res => {
      this.item = res
      })
  }
  constructor(
    Payments: PaymentsProvider,
    Providers: ProvidersProvider
  ) {
    this.Dbs = { fornitore: Providers, pagamento: Payments }
    this.text = 'Hello World';

  }

}
