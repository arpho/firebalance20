import { Pipe, PipeTransform } from '@angular/core';


/**
 * Generated class for the FilterItemsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'filter_items',
})
export class FilterItemsPipe implements PipeTransform {

  transform(value: any, filterString: string, ...args) {
    if (value && filterString) {
      return value.filter(item => item.nome.toUpperCase().match(filterString.toUpperCase()))
    }
    else // nessuna ricerca
      return value
  }
}
