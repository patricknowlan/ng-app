import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { NguiMapModule } from '@ngui/map';

import { VineService } from './vine.service';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MainListComponent } from './main-list/main-list.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { InfoComponent } from './info/info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainListComponent,
    SidebarNavComponent,
    InfoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    NguiMapModule.forRoot({
      apiUrl:
        'https://maps.google.com/maps/api/js?key=AIzaSyCs5uneLE643PYoZugfiH2XtyW492lamRc'
    }),
    CommonModule,
    AppRoutingModule
  ],
  providers: [VineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
