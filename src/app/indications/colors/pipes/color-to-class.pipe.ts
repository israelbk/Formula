import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToClass',
})
export class ColorToClassPipe implements PipeTransform {
  transform(number: number): string {
    switch (number) {
      case 1:
        return 'led-red';
      case 0:
        return 'led-green';
      case undefined:
        return 'led-white';
      default:
        return 'led-yellow';
    }
  }
}
