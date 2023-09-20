import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: Date): number {
    console.log(new Date());
    let today = new Date();
    return today.getFullYear() - date.getFullYear();
  }

}
