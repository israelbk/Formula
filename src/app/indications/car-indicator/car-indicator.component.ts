import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from '../colors/COLORS.enum';

@Component({
  selector: 'app-bool-car-indicator',
  templateUrl: './car-indicator.component.html',
  styleUrls: ['./car-indicator.component.css'],
})
export class BoolCarIndicatorComponent implements OnInit {
  @Input() color: COLORS;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
