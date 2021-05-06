import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css'],
})
export class NumberDisplayComponent implements OnInit {
  digitArry: number[] = [];

  @Input() set numberToDisplay(inputNumber: number) {
    this.digitArry = inputNumber
      ? inputNumber.toString(10).split('').map(Number).reverse()
      : [];
  }

  @Input() title;

  constructor() {}

  ngOnInit() {}
}
