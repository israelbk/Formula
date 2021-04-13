import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class DataDistrebuterService {
  cerror: Observable<boolean>;
  pedal: Observable<number>;
  rpm: Observable<number>;
  speed: Observable<number>;
  thorttle: Observable<number>;
  voltage: Observable<number>;
  brake: Observable<boolean>;
  perror: Observable<boolean>;
  bspd: Observable<boolean>;
  terror: Observable<boolean>;
  constructor(private dataProviderService: DataProviderService) {
    this.initObservables();
  }

  private initObservables() {
    // Cerror
    this.cerror = this.initBoolObservable('cerror');

    // pedal
    this.pedal = this.initNumberOservable('pedal');

    // rpm
    this.rpm = this.initNumberOservable('rpm');

    // speed
    this.speed = this.initNumberOservable('speed');

    // thorttle
    this.thorttle = this.initNumberOservable('thorttle');

    // voltage
    this.voltage = this.initNumberOservable('voltage');

    // brake
    this.brake = this.initBoolObservable('brake');

    // perror
    this.perror = this.initBoolObservable('perror');

    // bspd
    this.bspd = this.initBoolObservable('bspd');

    // terror
    this.terror = this.initBoolObservable('terror');
  }
  private initBoolObservable(dataKey: string): Observable<boolean> {
    return this.dataProviderService.recievedData.pipe(
      filter((data) => data.key === dataKey),
      map((filteredData) => filteredData.value === 1)
    );
  }

  private initNumberOservable(dataKey: string): Observable<number> {
    return this.dataProviderService.recievedData.pipe(
      filter((data) => data.key === dataKey),
      pluck('value')
    );
  }
}
