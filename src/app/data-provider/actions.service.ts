import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  constructor(private socketService: SocketService) {}

  shutDownCar() {
    this.socketService.sendData('Q');
  }

  idleUp() {
    this.socketService.sendData('a');
  }

  idleDown() {
    this.socketService.sendData('s');
  }

  breakOn() {
    this.socketService.sendData('b');
  }

  breakOff() {
    this.socketService.sendData('n');
  }

  sendCommand(command: string) {
    this.socketService.sendData(command);
  }
}
