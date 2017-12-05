import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProvidersItemListComponent } from './providers-item-list';

@NgModule({
  declarations: [
    ProvidersItemListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProvidersItemListComponent
  ]
})
export class ProvidersItemListComponentModule {}
