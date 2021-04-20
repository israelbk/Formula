import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-driving-car',
  templateUrl: './animated-driving-car.component.html',
  styleUrls: ['./animated-driving-car.component.css'],
})
export class AnimatedDrivingCarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // target all path elements describing the gusts of air around the race car
    const paths = document.querySelectorAll('path.air');

    /*
for each path update the --stroke-dash property to match the length of the stroke
! create another property for the negative offset (mostly due to Edge not liking the calc() function with custom properties)
! include also an increasing delay to animate the path in sequence
*/
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
