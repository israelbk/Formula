import { Injectable } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class DataDistrebuterService {
  readonly cerror$ = this.initBoolObservable('cerror');
  readonly pedal$ = this.initNumberOservable('pedal');
  readonly rpm$ = this.initNumberOservable('rpm');
  readonly speed$ = this.initNumberOservable('speed');
  readonly thorttle$ = this.initNumberOservable('thorttle');
  readonly voltage$ = this.initNumberOservable('voltage');
  readonly brake$ = this.initBoolObservable('brake');
  readonly perror$ = this.initBoolObservable('perror');
  readonly bspd$ = this.initBoolObservable('bspd');
  readonly terror$ = this.initBoolObservable('terror');

  constructor(private dataProviderService: DataProviderService) {}

  private initBoolObservable(dataKey: string): Observable<boolean> {
    const data$ = this.dataProviderService.recievedData$.pipe(
      filter((recievedData) => recievedData.key === dataKey),
      map((record) => Boolean(record.value)),
      distinctUntilChanged()
    );

    return merge(data$, this.errorObservable());
  }

  private initNumberOservable(dataKey: string): Observable<number> {
    const data$ = this.dataProviderService.recievedData$.pipe(
      filter((recievedData) => recievedData.key === dataKey),
      map((data) => +data.value),
      distinctUntilChanged()
    );

    return merge(data$, this.errorObservable());
  }

  private errorObservable(): Observable<any> {
    return this.dataProviderService.recievedData$.pipe(
      switchMap(() => of(undefined).pipe(delay(200)))
    );
  }
}
