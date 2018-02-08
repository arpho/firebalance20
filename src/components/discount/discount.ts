import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AlertController, ModalController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DiscountModel } from '../../models/discount.model';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the DiscountComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'discount',
  templateUrl: 'discount.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountComponent implements OnInit, OnDestroy {

  text: string;
  public discountForm: FormGroup;
  subscription: Subscription;
  @Input() sconto: DiscountModel;
  @Output() Sconto: EventEmitter<DiscountModel> = new EventEmitter<DiscountModel>()

  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public fb: FormBuilder,
  ) {
    this.text = 'Hello World';
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  changedDiscount(data) {
    let sconto = new DiscountModel().buildFromForm(this.discountForm);
    this.Sconto.emit(sconto)

  }

  ngOnInit() {
    this.discountForm = this.fb.group({
      descrizione: new FormControl(this.sconto.descrizione),
      sconto: new FormControl(this.sconto.sconto),
      percentuale: new FormControl(this.sconto.percentuale)
    })
    this.subscription = this.discountForm.valueChanges.subscribe(form => this.changedDiscount(form))
  }



}
