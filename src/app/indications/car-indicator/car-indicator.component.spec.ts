/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarIndicatorComponent } from './car-indicator.component';

describe('CarIndicatorComponent', () => {
  let component: CarIndicatorComponent;
  let fixture: ComponentFixture<CarIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
