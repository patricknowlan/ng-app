import { Component, OnInit } from '@angular/core';
import { Vine } from '../vine'
import { VineService } from '../vine.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  vines: Vine[] = [];

  constructor(private vineService: VineService) { }

  ngOnInit() {
    console.log('In the main List component init function');
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
