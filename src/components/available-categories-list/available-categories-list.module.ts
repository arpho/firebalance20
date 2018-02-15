import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AvailableCategoriesListComponent } from './available-categories-list';

@NgModule({
  declarations: [
    AvailableCategoriesListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AvailableCategoriesListComponent
  ]
})
export class AvailableCategoriesListComponentModule {}
