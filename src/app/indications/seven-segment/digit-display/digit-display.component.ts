import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digit-display',
  templateUrl: './digit-display.component.html',
  styleUrls: ['./digit-display.component.css'],
})
export class BasicNumberIndicatorComponent implements OnInit {
  hideA: boolean;
  hideB: boolean;
  hideC: boolean;
  hideD: boolean;
  hideE: boolean;
  hideF: boolean;
  hideG: boolean;

  @Input() set digit(inputDigit: number) {
    this.hideAll();
    this.displayByNumber(inputDigit);
  }

  constructor() {
    this.hideAll();
  }

  ngOnInit() {}

  private hideAll() {
    this.hideA = true;
    this.hideB = true;
    this.hideC = true;
    this.hideD = true;
    this.hideE = true;
    this.hideF = true;
    this.hideG = true;
  }
  private displayByNumber(inputDigit: number) {
    switch (inputDigit) {
      case 0:
        this.hideA = false;
        this.hideB = false;
        this.hideC = false;
        this.hideD = false;
        this.hideE = false;
        this.hideF = false;
        break;

      case 1:
        this.hideB = false;
        this.hideC = false;
        break;

      case 2:
        this.hideA = false;
        this.hideB = false;
        this.hideD = false;
        this.hideE = false;
        this.hideG = false;
        break;

      case 3:
        this.hideA = false;
        this.hideB = false;
        this.hideC = false;
        this.hideD = false;
        this.hideG = false;
        break;

      case 4:
        this.hideB = false;
        this.hideC = false;
        this.hideF = false;
        this.hideG = false;
        break;

      case 5:
        this.hideA = false;
        this.hideC = false;
        this.hideD = false;
        this.hideF = false;
        this.hideG = false;
        break;

      case 6:
        this.hideA = false;
        this.hideC = false;
        this.hideD = false;
        this.hideE = false;
        this.hideF = false;
        this.hideG = false;
        break;

      case 7:
        this.hideA = false;
        this.hideB = false;
        this.hideC = false;
        break;

      case 8:
        this.hideA = false;
        this.hideB = false;
        this.hideC = false;
        this.hideD = false;
        this.hideE = false;
        this.hideF = false;
        this.hideG = false;
        break;

      case 9:
        this.hideA = false;
        this.hideB = false;
        this.hideC = false;
        this.hideD = false;
        this.hideF = false;
        this.hideG = false;
        break;
    }
  }
}
