import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css'],
})
export class NumberDisplayComponent {
  digitArry: (number | null)[] = [];

  @Input() set numberToDisplay(inputNumber: number) {
    this.digitArry = inputNumber
      ? inputNumber.toString(10).split('').map(Number).reverse()
      : [];
  }

  @Input() title;
}
