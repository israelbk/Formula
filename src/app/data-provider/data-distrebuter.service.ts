import { Injectable } from '@angular/core';
import { merge, Observable, timer } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  switchMap,
} from 'rxjs/operators';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class DataDistrebuterService {
  private readonly errorObservable$ = this.dataProviderService.recievedData$.pipe(
    switchMap(() => timer(200)),
    mapTo(null)
  );

  // Boolean observables.
  readonly cerror$ = this.getBoolStream('cerror');
  readonly brake$ = this.getBoolStream('brake');
  readonly perror$ = this.getBoolStream('perror');
  readonly bspd$ = this.getBoolStream('bspd');
  readonly terror$ = this.getBoolStream('terror');

  // Number observables.
  readonly pedal$ = this.getNumberStream('pedal');
  readonly rpm$ = this.getNumberStream('rpm');
  readonly speed$ = this.getNumberStream('speed');
  readonly thorttle$ = this.getNumberStream('thorttle');
  readonly voltage$ = this.getNumberStream('voltage');

  constructor(private dataProviderService: DataProviderService) {}

  private getBoolStream(dataKey: string): Observable<boolean | null> {
    const data$ = this.dataProviderService.recievedData$.pipe(
      filter((recievedData) => recievedData.key === dataKey),
      map((record) => Boolean(record.value)),
      distinctUntilChanged()
    );

    return merge(data$, this.errorObservable$);
  }

  private getNumberStream(dataKey: string): Observable<number> {
    const data$ = this.dataProviderService.recievedData$.pipe(
      filter((recievedData) => recievedData.key === dataKey),
      map((data) => +data.value),
      distinctUntilChanged()
    );

    return merge(data$, this.errorObservable$);
  }
}
