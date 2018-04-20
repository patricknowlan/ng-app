import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vine } from './../vine';
import { VineService } from './../vine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  title = 'Vinery';
  public selectedVineryOption: string;
  coordinates: Array<any> = [];

  vines: Vine[] = [];
  brews: Vine[] = [];

  constructor(private route: ActivatedRoute, private vineService: VineService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(!params.type) this.selectedVineryOption = "wines";
      else {
        this.selectedVineryOption = params.type;
      }
    });
    this.getWineries();
    this.getBreweries();
  }

  getWineries(): void {
    this.vineService.getWineries().subscribe(
      (data: Vine[]) => {
        this.vines = data;
      },
      err => console.error(err)
    );
  }

  getBreweries(): void {
    this.vineService.getBreweries().subscribe(
      (data: Vine[]) => {
        this.brews = data;
      },
      err => console.error(err)
    );
  }

  getSelectedVines(): Array<any> {
    // GET SELECTED LIST
    // LOOP THROUGH ADDRESS AND GET GEOCODE
    // https://maps.googleapis.com/maps/api/geocode/json?address=209+Trade+Street+Danville,+Virginia+24541&key=AIzaSyCs5uneLE643PYoZugfiH2XtyW492lamRc
    // return array of addresses like below
    //return [{address:[36.5857031, -79.42111269999999]}];
    return [];
  }

  createMap(): void {
    var currentSelections = this.vineService.getUserSelections();
    currentSelections.forEach(element => {
      this.vineService.lookupGeocode(element.address).subscribe(
        (data:any) => {
          this.coordinates.push({address:[data.results[0].geometry.location.lat, data.results[0].geometry.location.lng]});
        },
        err => console.error(err)
      )
    });
  }

}