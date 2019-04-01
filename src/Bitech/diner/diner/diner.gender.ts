import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getGender'
})
export class DinerGenderPipe implements PipeTransform {
  transform( value: string ) {
    if (value === undefined) return "未知"
    return value === 'm' ? "男" : "女"
  }
}
