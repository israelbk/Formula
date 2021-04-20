import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class DataDistrebuterService {
  readonly cerror = this.initBoolObservable('cerror');
  readonly pedal = this.initNumberOservable('pedal');
  readonly rpm = this.initNumberOservable('rpm');
  readonly speed = this.initNumberOservable('speed');
  readonly thorttle = this.initNumberOservable('thorttle');
  readonly voltage = this.initNumberOservable('voltage');
  readonly brake = this.initBoolObservable('brake');
  readonly perror = this.initBoolObservable('perror');
  readonly bspd = this.initBoolObservable('bspd');
  readonly terror = this.initBoolObservable('terror');

  constructor(private dataProviderService: DataProviderService) {}

  private initBoolObservable(dataKey: string): Observable<boolean> {
    return this.dataProviderService.recievedData.pipe(
      filter((data) => data.key === dataKey),
      map((filteredData) => filteredData.value == true)
    );
  }

  private initNumberOservable(dataKey: string): Observable<number> {
    return this.dataProviderService.recievedData.pipe(
      filter((data) => data.key === dataKey),
      map((data) => +data.value)
    );
  }
}
