import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-on-off-toggle',
  templateUrl: './on-off-toggle.component.html',
  styleUrls: ['./on-off-toggle.component.css'],
})
export class OnOffToggleComponent {
  @Output() toggled = new EventEmitter<boolean>();
  toggleState = true;

  toggle(eventData) {
    this.toggleState = !this.toggleState;
    this.toggled.emit(this.toggleState);
  }
}
