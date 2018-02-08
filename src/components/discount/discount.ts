import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy,OnDestroy } from '@angular/core';
import {AlertController,ModalController, NavParams } from 'ionic-angular';
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
export class DiscountComponent implements OnInit,OnDestroy {

  text: string;
  public discountForm: FormGroup;
  subscription:Subscription;
  @Input() sconto: DiscountModel;
  @Output() Sconto:EventEmitter<DiscountModel> = new EventEmitter<DiscountModel>()

  constructor(
    public alertCtrl:AlertController,
    public modalCtrl: ModalController,
    public fb: FormBuilder,
  ) {
    this.text = 'Hello World';
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

  changedDiscount(data){
    let sconto = new DiscountModel().buildFromForm(this.discountForm);
    console.log('change discount',data)
    this.Sconto.emit(sconto)

  }

  ngOnInit() {
    console.log('sconto', this.sconto)
    this.discountForm = this.fb.group({
      descrizione:new FormControl(this.sconto.descrizione),
      sconto:new FormControl(this.sconto.sconto),
      percentuale:new FormControl(this.sconto.percentuale)
    })
    this.subscription = this.discountForm.valueChanges.subscribe(form=>this.changedDiscount(form))
  }


  setDiscount(){

    let alert = this.alertCtrl.create({
      title: 'Login',
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log('login',data)
          }
        }
      ]
    });
    alert.addInput({name: 'type',
    label: 'percentuale?',
    value: 'percentual',
    type: 'radio',
    checked: true})
    alert.addInput({
      type:'radio',
     label:'assoluto',
     value:'assouluto'
  })


    alert.present();



    
  
  

  }
}
