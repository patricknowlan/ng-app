import { Component, OnInit, ViewChild } from '@angular/core';

import {} from '@types/googlemaps';

@Component({
  selector: 'route-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public mapOptions: Object = {
    center: { lat: 37.4316, lng: -78.6569 },
    zoom: 7
  };

  constructor() { }

  ngOnInit() {
  }

}
