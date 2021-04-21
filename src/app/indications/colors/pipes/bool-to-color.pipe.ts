import { Pipe, PipeTransform } from '@angular/core';
import { COLORS } from '../COLORS.enum';

@Pipe({
  name: 'boolToColor',
})
export class BoolToColorPipe implements PipeTransform {
  transform(value: boolean): COLORS {
    return value == null ? COLORS.White : value ? COLORS.Green : COLORS.Red;
  }
}
