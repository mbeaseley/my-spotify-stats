import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';


@Pipe({
  name: 'localeDate'
})
export class LocaleDatePipe implements PipeTransform {

  transform(dateObject: dayjs.Dayjs | Date, format: string): any {
    return dayjs(dateObject).format(format);
  }

}
