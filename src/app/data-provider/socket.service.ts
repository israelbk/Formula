import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  // Our socket connection
  private socket: Socket<DefaultEventsMap, DefaultEventsMap>;

  private recievedDataSubject: Subject<Map<string, number>>;
  readonly recievedData$: Observable<Map<string, number>>;

  constructor() {
    this.recievedDataSubject = new Subject<Map<string, number>>();
    this.recievedData$ = this.recievedDataSubject.asObservable();
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (data: { key: any; value: number }) => {
      this.recievedDataSubject.next(new Map(Object.entries(data)));
    });
  }

  sendData(data: string) {
    this.socket.emit('action', data);
  }
}
