import { Pipe, PipeTransform } from '@angular/core';
import { COLORS } from '../COLORS.enum';

@Pipe({
  name: 'colorToClass',
})
export class ColorToClassPipe implements PipeTransform {
  transform(color: COLORS): string {
    switch (color) {
      case COLORS.Green:
        return 'led-green';
      case COLORS.Red:
        return 'led-red';
      case COLORS.Yellow:
        return 'led-yellow';
      case COLORS.White:
      default:
        return 'led-white';
    }
  }
}
