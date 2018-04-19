import { Component } from '@angular/core';
import { Vine } from './vine'
import { VineService } from './vine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vinery';

  vines: Vine[] = [];
  brews: Vine[] = [];

  constructor(private vineService: VineService) { }

  ngOnInit() {
    this.getWineries()
    this.getBreweries()
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
          this.brews = data;
        },
        err => console.error(err)
      );
  }
}
