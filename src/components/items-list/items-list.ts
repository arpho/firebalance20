import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { PaymentsProvider } from '../../providers/payments/payments';
import { ProvidersProvider } from '../../providers/providers/providers';
import { Observable } from 'rxjs/Observable';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';

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
  @Input() provider:boolean;
  subscription: Subscription;
  location: { latitude: number, longitude: number };
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
    if(this.provider)
    this.Geolocation.subScribeLocation(coords=>{
      if (coords)
        this.location = { longitude: coords.longitude, latitude: coords.latitude }
    })
    this.db = this.Dbs[this.component]

    this.db.getElements(res => {
      this.items = res
    })
  }
  selected(item) {
    console.log('selected', item)
    this.selectedEvent.emit(item.key)
  }
  constructor(public Payments: PaymentsProvider,
    public Geolocation:GeolocationProvider,
    public Suppliers: ProvidersProvider) {
    console.log('Hello ItemsListComponent Component');
    this.Geolocation.refreshLocation();
    this.text = 'Hello World';
    this.Dbs = { "fornitore": Suppliers, "pagamento": Payments }
  }

}
