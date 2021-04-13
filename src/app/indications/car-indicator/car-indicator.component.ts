import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-indicator',
  templateUrl: './car-indicator.component.html',
  styleUrls: ['./car-indicator.component.css'],
})
export class CarIndicatorComponent implements OnInit {
  @Input() iconPath: string;
  constructor() {}

  ngOnInit() {}

  //   $( function() {
  //   var $winHeight = $( window ).height()
  //   $( '.container' ).height( $winHeight );
  // });
}
