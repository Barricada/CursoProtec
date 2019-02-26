import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, exp: number): any {
    return value**exp; // equivale a Math.pow(value,exp);
  }

}
