import { Component, Input, Output, EventEmitter, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbLayer } from '../../app/dbLayer.interface';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { Observable } from 'rxjs/Rx';
import { UtilitiesService } from '../../app/utilities.service'
import { CreateProviderPage} from '../../pages/create-provider/create-provider';
import { CreatePaymentPage} from '../../pages/create-payment/create-payment';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { ProvidersProvider } from '../../providers/providers/providers';
/**
 * Generated class for the SelectorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selector',
  templateUrl: 'selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorComponent implements OnInit {
  @Input() db: DbLayer;//servizio di  backend
  @Input() fieldId: string;
  @Input() placeholder: string;
  @Input() CreatePage: any;
  @Input() component: string;// componente di cui aprire il popup di creazione
  @Output() selected: EventEmitter<string> = new EventEmitter<string>(); // segnale emesso al componente father in caso di selezione nei componenti figli
  Components: any //oggetto usato per la selezione del popup da visualzzare
  filterString: string;
  spinning: boolean;
  items: Observable<any> // items visualizzati nella lista

  add() {
    console.log('adding');
    let modal = this.modal.create(this.Components[this.db.getComponentType()]);
    modal.onDidDismiss(data => {
      this.fieldId = data.key
      this.selected.emit(data.key);
    });
    modal.present();
  }

  doFilter(filterString) {
    this.spinning = true;
    this.filterString = filterString;
  }
  ngOnInit() {
    this.spinning = true;
    console.log('fieldId in selector',this.fieldId);
    this.db.getElements().subscribe(a => {
      this.spinning = false;
    })
    this.items = this.db.getElements();
    if (this.fieldId)
    null

  }

  selectedEvent(id: any) {
    //this.filterString = "";
    this.fieldId = id;
    this.selected.emit(id);
  }

  constructor(

    public modal: ModalController,
    public Utilities: UtilitiesProvider,
    public Suppliers: ProvidersProvider) {
    //this.placeholder = 'seleziona fornitore';
    this.spinning = false;
    this.Components = { "supplier": CreateProviderPage, "payment": CreatePaymentPage };
  }

}
