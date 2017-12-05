import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateProviderPage } from './update-provider';

@NgModule({
  declarations: [
    UpdateProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateProviderPage),
  ],
  exports: [
    UpdateProviderPage
  ]
})
export class UpdateProviderPageModule {}
