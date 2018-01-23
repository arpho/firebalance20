import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCartModel } from '../../models/shoppingCart.model'

/**
 * Generated class for the DateSorterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'date_sorter',
})
export class DateSorterPipe implements PipeTransform {
  transform(value: [ShoppingCartModel], ...args) {
    if (value)
      return value.sort((a: ShoppingCartModel, b: ShoppingCartModel) => {
        return -(new Date(a.dataAcquisto).getTime() - new Date(b.dataAcquisto).getTime())
        //ordino dal più recente al più vecchio
      })


  }
}
