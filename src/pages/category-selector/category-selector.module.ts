import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorySelectorPage } from './category-selector';

@NgModule({
  declarations: [
    CategorySelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(CategorySelectorPage),
  ],
  exports: [
    CategorySelectorPage
  ]
})
export class CategorySelectorPageModule {}
