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


  constructor(
    private http: HttpClient) { }

  getWineries (): Observable<Vine[]> {
    return this.http.get<Vine[]>(this.winesUrl)
  }

  getBreweries (): Observable<Vine[]> {
    return this.http.get<Vine[]>(this.brewsUrl)
  }
}

