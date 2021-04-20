import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from '../colors/COLORS.enum';

@Component({
  selector: 'app-car-indicator',
  templateUrl: './car-indicator.component.html',
  styleUrls: ['./car-indicator.component.css'],
})
export class CarIndicatorComponent implements OnInit {
  @Input() color: COLORS;
  constructor() {}

  ngOnInit() {}
}
