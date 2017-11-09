import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CategoryCounterComponent } from './category-counter';

@NgModule({
  declarations: [
    CategoryCounterComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CategoryCounterComponent
  ]
})
export class CategoryCounterComponentModule {}
