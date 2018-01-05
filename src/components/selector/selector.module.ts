import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectorComponent } from './selector';

@NgModule({
  declarations: [
    SelectorComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SelectorComponent
  ]
})
export class SelectorComponentModule {}
