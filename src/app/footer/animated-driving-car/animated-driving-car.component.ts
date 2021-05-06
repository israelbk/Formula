import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-driving-car',
  templateUrl: './animated-driving-car.component.html',
  styleUrls: ['./animated-driving-car.component.css'],
})
export class AnimatedDrivingCarComponent {
  constructor() {
    // target all path elements describing the gusts of air around the race car
    const paths = document.querySelectorAll('path.air');

    // add an increasing delay to the animation
    paths.forEach((path: SVGGeometryElement, index) => {
      const totalLength = path.getTotalLength();
      path.style.setProperty('--stroke-dash', totalLength.toString());
      path.style.setProperty(
        '--stroke-dash-negative',
        (-totalLength).toString()
      );
      // ! as the first path actually describes a stroke on the left side of the car, tailor its delay to occur with the dashes on the left side
      if (index === 0) {
        path.style.animationDelay = `${0.08 * (paths.length - 2)}s`;
      } else {
        path.style.animationDelay = `${0.08 * index}s`;
      }
    });
  }
}
