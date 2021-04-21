import { BoolToColorPipe } from './indications/colors/pipes/bool-to-color.pipe';
import { IndicatorsComponent } from './indications/indicators/indicators.component';
import { AnimatedDrivingCarComponent } from './footer/animated-driving-car/animated-driving-car.component';
import { BoolCarIndicatorComponent } from './indications/car-indicator/car-indicator.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ColorToClassPipe } from './indications/colors/pipes/color-to-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BoolCarIndicatorComponent,
    IndicatorsComponent,
    AnimatedDrivingCarComponent,
    ColorToClassPipe,
    BoolToColorPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
