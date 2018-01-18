import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { PaymentsProvider } from '../../providers/payments/payments';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Observable } from 'rxjs/Observable';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class ItemsListComponent implements OnInit, OnChanges {
  @Input() component: string;
  @Output() selectedEvent: EventEmitter<string> = new EventEmitter<string>()
  @Input() filterString: string;
  text: string;
  Dbs: any;
  items: Observable<any>
  db: PaymentsProvider | ProvidersProvider

  ngOnChanges(changes: SimpleChanges) {
    /* if(changes.filterString)
     {console.log('filterString',changes.filterString)
     if(this.items)
       this.items= this.items.filter(item=>item.nome.match(changes.filterString.currentValue))
       console.log('items',this.items)
     }*/
  }
  ngOnInit() {
    this.db = this.Dbs[this.component]
    console.log('db', this.db)
    this.db.getElements(res => {
      this.items = res
      console.log('result', res)
    })
  }
  selected(item) {
    console.log('selected', item)
    this.selectedEvent.emit(item.key)
  }
  constructor(public Payments: PaymentsProvider,
    public Suppliers: ProvidersProvider) {
    console.log('Hello ItemsListComponent Component');
    this.text = 'Hello World';
    this.Dbs = { "fornitore": Suppliers, "pagamento": Payments }
  }

}
