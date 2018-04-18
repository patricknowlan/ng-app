import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {MatListModule} from '@angular/material';



import { AppComponent } from './app.component';
import { VineService } from './vine.service';

const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    MatListModule
  ],
  providers: [VineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
