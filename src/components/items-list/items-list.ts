import { Component, OnInit, Input } from '@angular/core';
import { PaymentsProvider } from '../../providers/payments/payments';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ItemsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListComponent implements OnInit {
  @Input() component: string;

  text: string;
  Dbs: any;
  items: Observable<any>
  db: PaymentsProvider | ProvidersProvider
  ngOnInit() {
    this.db = this.Dbs[this.component]
    console.log('db', this.db)
    this.db.getElements(res => {
    this.items = res
      console.log('result', res)
    })
  }
  constructor(public Payments: PaymentsProvider,
    public Suppliers: ProvidersProvider) {
    console.log('Hello ItemsListComponent Component');
    this.text = 'Hello World';
    this.Dbs = { "fornitore": Suppliers, "pagamento": Payments }
  }

}
