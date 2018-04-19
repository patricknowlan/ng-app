import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {MatListModule} from '@angular/material';

import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';
import { VineService } from './vine.service';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
  // { path: 'home', component: AppComponent,
  //   children: [
  //     { path: 'wineries', component: WineryComponent },
  //     { path: 'breweries', component: BreweryComponent }
  //   ]
  // }
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    MatListModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCs5uneLE643PYoZugfiH2XtyW492lamRc'})
  ],
  providers: [VineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
