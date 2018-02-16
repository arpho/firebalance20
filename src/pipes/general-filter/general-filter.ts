import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GeneralFilterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'general_filter',
})
export class GeneralFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string[], filter) {
    if(value)
     return filter?value.filter(filter):value 
     
  }
}
 