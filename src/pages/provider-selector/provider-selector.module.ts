import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderSelectorPage } from './provider-selector';

@NgModule({
  declarations: [
    ProviderSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderSelectorPage),
  ],
  exports: [
    ProviderSelectorPage
  ]
})
export class ProviderSelectorPageModule {}
