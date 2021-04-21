import { Component, OnInit } from '@angular/core';
import { DataDistrebuterService } from 'src/app/data-provider/data-distrebuter.service';
import { COLORS } from '../colors/COLORS.enum';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css'],
})
export class IndicatorsComponent implements OnInit {
  COLORS = COLORS;

  constructor(readonly dataDistrebuterService: DataDistrebuterService) {}

  ngOnInit() {}
}
