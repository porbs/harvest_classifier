import { Pipe, PipeTransform } from '@angular/core';
import {Rez} from './data.service';

@Pipe({
  name: 'rez'
})
export class RezPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case Rez.A:
        return 'Високий прибуток';
      case Rez.B:
        return 'Середній прибуток';
      case Rez.C:
        return 'Малий прибуток';
      case Rez.D:
        return 'Збитки';
      default:
        return 'Невідомо :с';
    }
  }

}
