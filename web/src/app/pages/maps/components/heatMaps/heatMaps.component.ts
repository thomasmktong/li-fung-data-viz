import {Component} from '@angular/core';

import {HeatMapsService} from './heatMaps.service';

@Component({
  selector: 'heat-maps',
  templateUrl: './heatMaps.html',
  styleUrls: ['./heatMaps.scss']
})
export class HeatMaps {

  chartData:Object;

  constructor(private _heatMapsService:HeatMapsService) {
  }

  ngOnInit() {
    this.chartData = this._heatMapsService.getData();
  }
}
