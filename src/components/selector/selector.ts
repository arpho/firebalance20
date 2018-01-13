import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbLayer } from '../../providers/DbLayer.interface';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { Observable } from 'rxjs/Rx';
import { UtilitiesService } from '../../app/utilities.service'
import { CreateProviderPage } from '../../pages/create-provider/create-provider';
import { CreatePaymentPage } from '../../pages/create-payment/create-payment';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { ProvidersProvider } from '../../providers/providers/providers';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { PaymentsProvider } from '../../providers/payments/payments';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PaymentsModel } from '../../models/payment.model';
/**
 * Generated class for the SelectorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selector',
  templateUrl: 'selector.html'
})
export class SelectorComponent implements OnInit, OnChanges {
  @Input() fieldId: string;
  @Input() placeholder: string;
  @Input() label:string
  @Input() CreatePage: any;
  @Input() component: string;// componente di cui aprire il popup di creazione
  @Output() selected: EventEmitter<string> = new EventEmitter<string>(); // segnale emesso al componente father in caso di selezione nei componenti figli
  Components: any //oggetto usato per la selezione del popup da visualzzare
  Dbs:any;
  public field:string;
  filterString: string;
  spinning: boolean;
  item:BehaviorSubject<PaymentsModel>;
  db: DbLayer
  items: Observable<any> // items visualizzati nella lista

  add() {
    console.log('adding Item');
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.fieldId) {console.log('cambio fieldId', changes)
      if(this.Dbs[this.component].isReady()){
    this.field =this.component
    console.log('field',this.component,this.field)

      this.Dbs[this.component].getElementById(this.fieldId,res=>{
        this.item = res;
        console.log('got item by id',res)
      })
    }
  }
  }

  doFilter(filterString) {
    this.spinning = true;
    this.filterString = filterString;
  }
  ngOnInit() {
    console.log('placeholder', this.component)
    /* this.spinning = true;
     console.log('fieldId in selector',this.fieldId);
     this.db.getElements(res=> {
       this.items = res})
     if (this.fieldId)
     null*/

  }

  selectedEvent(id: any) {
    //this.filterString = "";
    this.fieldId = id;
    this.selected.emit(id);
  }

  constructor(

    public modal: ModalController,
    public Utilities: UtilitiesProvider,
    public Payments: PaymentsProvider,
    public Suppliers: ProvidersProvider) {
    //this.placeholder = 'seleziona fornitore';
    this.spinning = false;
    this.Components = { "fornitore": CreateProviderPage, "pagamento": CreatePaymentPage };
    this.Dbs = { "fornitore": Suppliers, "pagamento": Payments }
    

  }

}
