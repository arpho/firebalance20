import { Pipe, PipeTransform } from '@angular/core';
import { ProviderModel } from '../../models/providers/provider.model';

/**
 * Generated class for the DistanceSorterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'distance_sorter',
})
export class DistanceSorterPipe implements PipeTransform {

  distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }


  transform(value: [ProviderModel], location) {

    if (value && location) {

      return value.sort((a: ProviderModel, b: ProviderModel) => {
        return this.distance(a.latitudine, a.longitudine, location.latitude, location.longitude) -
          this.distance(b.latitudine, b.longitudine, location.latitude, location.longitude)
      });
    }
    else
      return value
  }
}
