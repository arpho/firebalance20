import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { ProviderModel } from '../../models/providers/provider.model';
import { ProvidersProvider } from '../../providers/providers/providers';

/**
 * Generated class for the ProvidersChipComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'providers-chip',
  templateUrl: 'providers-chip.html'
})
export class ProvidersChipComponent implements OnInit {
  @Input() ProviderId: String;
  Provider: Observable<ProviderModel>;
  text: string;
  ngOnInit() {
    this.Providers.getProviderById(this.ProviderId, obs => {
      this.Provider = obs
    });
  }
  constructor(
    public Providers: ProvidersProvider
  ) {
    console.log('Hello ProvidersChipComponent Component');
    this.text = 'Hello World';
  }

}
