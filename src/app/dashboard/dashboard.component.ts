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
}