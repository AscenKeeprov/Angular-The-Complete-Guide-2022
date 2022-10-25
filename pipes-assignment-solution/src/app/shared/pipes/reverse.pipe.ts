import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(input: string): string {
    let output = input.split('')
      .reverse()
      .join('');

    return output;
  }
}
