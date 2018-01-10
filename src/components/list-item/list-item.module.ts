import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListItemComponent } from './list-item';

@NgModule({
  declarations: [
    ListItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListItemComponent
  ]
})
export class ListItemComponentModule {}
