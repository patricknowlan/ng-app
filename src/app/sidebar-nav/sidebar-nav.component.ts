import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {
  @Input() vineryOption: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.vineryOption);
  }

  updateList(category){
    this.vineryOption = category;
    console.log(this.vineryOption);
  }
}
