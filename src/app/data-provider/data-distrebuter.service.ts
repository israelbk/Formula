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
    mapTo(undefined)
  );

  // Boolean observables.
  readonly cerror$ = this.geStream('cerror');
  readonly brake$ = this.geStream('brake');
  readonly perror$ = this.geStream('perror');
  readonly bspd$ = this.geStream('bspd');
  readonly terror$ = this.geStream('terror');

  // Number observables.
  readonly pedal$ = this.geStream('pedal');
  readonly rpm$ = this.geStream('rpm');
  readonly speed$ = this.geStream('speed');
  readonly thorttle$ = this.geStream('thorttle');
  readonly voltage$ = this.geStream('voltage');

  constructor(private readonly dataProviderService: DataProviderService) {}
  private geStream(dataKey: string): Observable<number> {
    const data$ = this.dataProviderService.recievedData$.pipe(
      filter((recievedData) => recievedData.key === dataKey),
      map((data) => +data.value),
      distinctUntilChanged()
    );

    return merge(data$, this.errorObservable$);
  }
}
