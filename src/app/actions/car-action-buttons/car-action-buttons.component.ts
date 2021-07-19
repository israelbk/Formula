import { OnOffToggleComponent } from './../on-off-toggle/on-off-toggle.component';
import { logging } from 'protractor';
import { ActionsService } from './../../data-provider/actions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-action-buttons',
  templateUrl: './car-action-buttons.component.html',
  styleUrls: ['./car-action-buttons.component.css'],
})
export class CarActionButtonsComponent implements OnInit {
  commandText: string;
  constructor(private actionsService: ActionsService) {}

  ngOnInit() {}

  onShutCarOff() {
    this.actionsService.shutDownCar();
  }
  onPlusIdle() {
    this.actionsService.idleUp();
  }
  onMinusIdle() {
    this.actionsService.idleDown();
  }

  onBrakeToggle(toggleState: boolean) {
    if (toggleState) this.actionsService.breakOn();
    else this.actionsService.breakOff();
  }

  onSendCommand(command: string) {
    this.actionsService.sendCommand(command);
  }
}
