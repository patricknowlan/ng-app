import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vine } from '../vine'
import { VineService } from '../vine.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit, OnChanges {
  @Input() vineryOption: string;

  public vines: Vine[] = [];

  constructor(private vineService: VineService) { }

  ngOnInit() {
    if(this.vineryOption == 'wines') this.getWineries();
    if(this.vineryOption == 'beers') this.getBreweries();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      console.log("change", change);
      if(change.currentValue === "wines"){
        this.getWineries();
      }
      if(change.currentValue === "beers"){
        this.getBreweries();
      }
    }
  }

  getWineries(): void {
    this.vineService.getWineries()
      .subscribe(
        (data: Vine[]) => {
          this.vines = data;
        },
        err => console.error(err)
      );
  }

  getBreweries(): void {
    this.vineService.getBreweries()
      .subscribe(
        (data: Vine[]) => {
          this.vines = data;
        },
        err => console.error(err)
      );
  }

}
