import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericIndicatorComponent } from './numeric-indicator.component';

describe('NumericIndicatorComponent', () => {
  let component: NumericIndicatorComponent;
  let fixture: ComponentFixture<NumericIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
