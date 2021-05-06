import { Component } from '@angular/core';
import { DataDistrebuterService } from 'src/app/data-provider/data-distrebuter.service';

@Component({
  selector: 'app-numeric-indicator',
  templateUrl: './numeric-indicator.component.html',
  styleUrls: ['./numeric-indicator.component.css'],
})
export class NumericIndicatorComponent {
  constructor(readonly dataDistrebuterService: DataDistrebuterService) {}
}
