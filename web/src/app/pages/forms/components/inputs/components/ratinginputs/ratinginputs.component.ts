import { Component } from '@angular/core';

@Component({
  selector: 'rating-inputs',
  templateUrl: './ratinginputs.html'
})

export class Rating {
  public _rate1:number = 3;
  public _rate2:number = 4;
  public _rate3:number = 50;

  public _max1:number = 5;
  public _max2:number = 10;
  public _max3:number = 100;

  constructor() {
  }

}
