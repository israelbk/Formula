import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bool-car-indicator',
  templateUrl: './car-indicator.component.html',
  styleUrls: ['./car-indicator.component.css'],
})
export class BoolCarIndicatorComponent {
  @Input() data: number;
  @Input() title: string;
}
