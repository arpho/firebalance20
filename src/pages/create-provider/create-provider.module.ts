import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProviderPage } from './create-provider';

@NgModule({
  declarations: [
    CreateProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProviderPage),
  ],
  exports: [
    CreateProviderPage
  ]
})
export class CreateProviderPageModule {}
