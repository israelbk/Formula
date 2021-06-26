/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberDisplayComponent } from './number-display.component';

describe('NumberDisplayComponent', () => {
  let component: NumberDisplayComponent;
  let fixture: ComponentFixture<NumberDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
