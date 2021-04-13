import { CarIndicatorComponent } from './indications/car-indicator/car-indicator.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, CarIndicatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
