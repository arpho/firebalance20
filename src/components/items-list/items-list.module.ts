import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ItemsListComponent } from './items-list';

@NgModule({
  declarations: [
    ItemsListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ItemsListComponent
  ]
})
export class ItemsListComponentModule {}
