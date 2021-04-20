import { ColorToClassPipe } from './indications/colors/color-to-class.pipe';
import { AnimatedDrivingCarComponent } from './footer/animated-driving-car/animated-driving-car.component';
import { CarIndicatorComponent } from './indications/car-indicator/car-indicator.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CarIndicatorComponent,
    AnimatedDrivingCarComponent,
    ColorToClassPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
