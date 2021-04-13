import { DataDistrebuterService } from './data-provider/data-distrebuter.service';
import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataProviderService } from './data-provider/data-provider.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formula';
  constructor(dataDistrebuterService: DataDistrebuterService) {
    dataDistrebuterService.voltage.subscribe((data) =>
      console.log('voltage', data)
    );

    dataDistrebuterService.rpm.subscribe((data) => console.log('rpm', data));
  }
}
