import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  // Our socket connection
  private socket;

  recievedData: Subject<{ key: string; value: number }>;

  constructor() {
    this.recievedData = new Subject<{ key: string; value: number }>();
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (data: { key: string; value: number }) => {
      this.recievedData.next(data);
    });
  }
}
