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

  constructor(private vineService: VineService) { }

  ngOnInit() {
    this.getWineries()
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
}
