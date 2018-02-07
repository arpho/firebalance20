import { Component, Input, OnChanges, Output, ChangeDetectionStrategy, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ShoppingCartModel, ItemModel } from '../../models/shoppingCart.model';
import { ItemCreatePage } from '../../pages/item-create/item-create';
import { ItemViewPage } from '../../pages/item-view/item-view';

/**
 * Generated class for the ShoppingCartDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-cart-detail',
  templateUrl: 'shopping-cart-detail.html'
})
export class ShoppingCartDetailComponent implements OnChanges {
  @Input() selectedCart: ShoppingCartModel
  @Output() Save: EventEmitter<ShoppingCartModel> = new EventEmitter<ShoppingCartModel>();
  text: string;
  selectorPayment: string = 'pagamento';
  selectorProvider: string = 'fornitore';
  labelFornitore: string = "Fornitore";
  labelPagamento: string = "Pagamento";
  removedItem: ItemModel;
  Cart: ShoppingCartModel;
  public cartForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private alertCtrl: AlertController,
    public modal: ModalController,
  ) {
    console.log('Hello ShoppingCartDetailComponent Component');
    this.text = 'Hello World detail ';

    this.cartForm = this.getForm(new ShoppingCartModel())

  }

  changedDiscount(sconto) {
    console.log('sconto', sconto)
  }
  addItem() {
    console.log('adding item')

    let modal = this.modal.create(ItemCreatePage, new ItemModel);
    modal.onDidDismiss(item => {
      if (item) {
        item.id = this.selectedCart.generateItemId()
        delete item.opts // campo aggiunto da angular che non piace  a firebase
        this.selectedCart.pushItem(item)
      }
    })
    modal.present();
  }

  calculatedTotal(total: number) {
    this.selectedCart.totale = total;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedCart)
      this.cartForm = this.getForm(this.selectedCart)
  }

  eventFornitore(data) {
    if (data) {
      this.cartForm.controls.fornitoreId.setValue(data.itemId)
      this.selectedCart.fornitoreId = data.itemId
    }
  }

  save(cart: ShoppingCartModel) {
    cart.note = cart.note || 'nessuna nota'// il campo undefined rompe firebase
    console.log('cart emitted', JSON.parse(JSON.stringify(cart)))
    this.Save.emit(cart);
  }

  eventPagamento(data) {
    if (data) {
      this.cartForm.controls.pagamentoId.setValue(data.itemId)
      this.selectedCart.pagamentoId = data.itemId
    }
  }

  update(item) {
    let modal = this.modal.create(ItemViewPage, item);
    modal.onDidDismiss(item => {
      if (item) {
        delete item.opts; // opts non va d'accordso con firebase
        this.selectedCart.updateItem(item)
      }
    })
    modal.present();
  }

  delete(item, sli) {
    this.selectedCart.removeItem(item)
    this.removedItem = item;
  }

  restoreItem() {
    this.selectedCart.pushItem(this.removedItem)
    this.removedItem = null;
  }
  getForm(cart: ShoppingCartModel) {
    return this.fb.group({
      dataAcquisto: new FormControl(cart.dataAcquisto),
      fornitoreId: new FormControl(cart.fornitoreId),
      moneta: new FormControl(cart.moneta),
      pagamentoId: new FormControl(cart.pagamentoId),
      online: new FormControl(cart.online),
      note: new FormControl(cart.note)
    }, Validators.required);
  }



}
