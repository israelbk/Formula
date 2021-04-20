import { COLORS } from './indications/colors/COLORS.enum';
import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DataDistrebuterService } from './data-provider/data-distrebuter.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TAU Race Car';
  COLORS = COLORS;
  constructor(dataDistrebuterService: DataDistrebuterService) {
    // dataDistrebuterService.brake.subscribe((x) => console.log('brake' + x));
    // dataDistrebuterService.pedal.subscribe((x) => console.log('pedal' + x));
  }
}
