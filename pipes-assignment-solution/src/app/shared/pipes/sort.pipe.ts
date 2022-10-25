import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {
  transform(array: Object[], propertyName: string): Object[] {
    return array.sort((object1, object2) => {
      if (object1[propertyName] < object2[propertyName]) {
        return -1;
      } else if (object1[propertyName] > object2[propertyName]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
