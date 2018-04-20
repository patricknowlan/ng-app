import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

import { } from '@types/googlemaps';

@Component({
  selector: 'app-route-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() mapMarkers: Array<any>;
  public vinesArray: Array<any>;

  public mapOptions: Object = {
    center: { lat: 37.4316, lng: -78.6569 },
    zoom: 7
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      this.vinesArray = change.currentValue;
    }
  }

}
