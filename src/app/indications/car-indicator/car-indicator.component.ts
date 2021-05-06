import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bool-car-indicator',
  templateUrl: './car-indicator.component.html',
  styleUrls: ['./car-indicator.component.css'],
})
export class BoolCarIndicatorComponent implements OnInit {
  @Input() data: number;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
