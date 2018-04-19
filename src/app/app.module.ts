import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';




import { AppComponent } from './app.component';
import { VineService } from './vine.service';
import { MainListComponent } from './main-list/main-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    MatListModule,
    CommonModule
  ],
  providers: [VineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
