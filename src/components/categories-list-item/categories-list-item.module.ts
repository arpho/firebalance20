import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CategoriesListItemComponent } from './categories-list-item';

@NgModule({
  declarations: [
    CategoriesListItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CategoriesListItemComponent
  ]
})
export class CategoriesListItemComponentModule {}
