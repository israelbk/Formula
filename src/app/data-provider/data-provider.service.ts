import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  // Our socket connection
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;

  private recievedDataSubject: Subject<{ key: string; value: number }>;
  readonly recievedData$: Observable<{ key: string; value: number | boolean }>;

  constructor() {
    this.recievedDataSubject = new Subject<{ key: string; value: number }>();
    this.recievedData$ = this.recievedDataSubject.asObservable();
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (data: { key: string; value: number }) => {
      this.recievedDataSubject.next(data);
    });
  }
}
