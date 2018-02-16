import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectedCategoriesListComponent } from './selected-categories-list';

@NgModule({
  declarations: [
    SelectedCategoriesListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SelectedCategoriesListComponent
  ]
})
export class SelectedCategoriesListComponentModule {}
