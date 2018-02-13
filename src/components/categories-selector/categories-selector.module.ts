import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CategoriesSelectorComponent } from './categories-selector';

@NgModule({
  declarations: [
    CategoriesSelectorComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CategoriesSelectorComponent
  ]
})
export class CategoriesSelectorComponentModule {}
