import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProvidersListComponent } from './providers-list';

@NgModule({
  declarations: [
    ProvidersListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProvidersListComponent
  ]
})
export class ProvidersListComponentModule {}
