import { NumberDisplayComponent } from './indications/seven-segment/number-display/number-display.component';
import { IndicatorsComponent } from './indications/indicators/indicators.component';
import { AnimatedDrivingCarComponent } from './footer/animated-driving-car/animated-driving-car.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ColorToClassPipe } from './indications/colors/pipes/color-to-class.pipe';
import { NumericIndicatorComponent } from './indications/indicators/numeric-indicator/numeric-indicator.component';
import { BasicNumberIndicatorComponent } from './indications/seven-segment/digit-display/digit-display.component';
import { BoolCarIndicatorComponent } from './indications/car-indicator/car-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BoolCarIndicatorComponent,
    IndicatorsComponent,
    AnimatedDrivingCarComponent,
    BasicNumberIndicatorComponent,
    NumberDisplayComponent,
    ColorToClassPipe,
    NumericIndicatorComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
