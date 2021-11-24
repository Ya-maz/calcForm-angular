import { Component } from '@angular/core';
import { aeroCheap, aeroMiddle, aeroLux, rjdCheap, rjdMiddle, rjdLux } from './utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formCalc';

  distance?: number;
  age?: number;
  baggage?: number;

  aero1?: number;
  aero2?: number;
  aero3?: number;

  rjd1?: number;
  rjd2?: number;
  rjd3?: number;
  constructor() { }
  calc() {
    if (this.distance && this.age && this.baggage) {
      console.log('in calc')
      this.aero1 = aeroCheap(this.distance, this.baggage)
      this.aero2 = Math.ceil(aeroMiddle(this.distance, this.age, this.baggage))
      this.aero3 = Math.ceil(aeroLux(this.distance, this.age, this.baggage))

      this.rjd1 = Math.ceil(rjdCheap(this.distance, this.age, this.baggage))
      this.rjd2 = Math.ceil(rjdMiddle(this.distance, this.age, this.baggage))
      this.rjd3 =  Math.ceil(rjdLux(this.distance, this.age, this.baggage))
    }
  }


}
