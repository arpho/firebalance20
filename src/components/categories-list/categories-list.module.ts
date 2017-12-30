import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CategoriesListComponent } from './categories-list';

@NgModule({
  declarations: [
    CategoriesListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CategoriesListComponent
  ]
})
export class CategoriesListComponentModule {}
