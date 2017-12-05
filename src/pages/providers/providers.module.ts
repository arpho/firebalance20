import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvidersPage } from './providers';

@NgModule({
  declarations: [
    ProvidersPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvidersPage),
  ],
  exports: [
    ProvidersPage
  ]
})
export class ProvidersPageModule {}
