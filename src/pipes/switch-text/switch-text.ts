import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SwitchTextPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'switchText',
})
export class SwitchTextPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(control: boolean, trueValue: string, falseValue: string) {
    return control ? trueValue : falseValue;
  }
}
