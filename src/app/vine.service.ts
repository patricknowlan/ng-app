import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Vine } from './vine';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VineService {

  private winesUrl = 'http://www.tannins.io/api/wineries';
  private brewsUrl = 'https://vast-sands-73618.herokuapp.com/api/breweries';

  selectedItems: Array<any> = [];

  constructor(
    private http: HttpClient) { }

  getWineries (): Observable<Vine[]> {
    return this.http.get<Vine[]>(this.winesUrl)
  }

  getBreweries (): Observable<Vine[]> {
    return this.http.get<Vine[]>(this.brewsUrl)
  }

  getUserSelections (): Array<any> {
    return this.selectedItems;
  }

  addUserSelection (item): void {
    this.selectedItems.push(item);
  }

  lookupGeocode (address): Observable<Object> {
    var addressNew = address.replace(" ", "+");
    var googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressNew + '&key=AIzaSyCs5uneLE643PYoZugfiH2XtyW492lamRc';
    return this.http.get(googleUrl);
  }
}

