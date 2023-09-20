import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): number{
    let today = new Date();
    return today.getFullYear() - date.getFullYear();
  }

}
