import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {  } from "./app.component";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataServiceService {
  constructor(private http: HttpClient){
//    private http: private http: HttpClient
//private messageService: MessageService
    let heroesUrl: string = 'https://api.yelp.com/v3/businesses/search';

    // function getHeroes (): Observable<Hero[]> {
  //     return this.http.get<Hero[]>(this.heroesUrl);
  //       // .pipe(
  //       //   tap(heroes => this.log(`fetched heroes`)),
  //       //   catchError(this.handleError('getHeroes', []))
  //       // );
  // }
  //   function getHeroes(): void {
  //     this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  //   }
    function getPlaces (): Observable<google.maps.places.PlaceResult[]> {
      return this.http.get(this.heroesUrl)
        .pipe(
          tap(heroes => this.log(`fetched heroes`)),
          catchError(this.handleError('getPlaces', []))
        );
  }
    function getCenter(center: google.maps.places.PlaceResult): Observable<google.maps.places.PlaceResult> {
        const url = `${this.heroesUrl}/?latitude=${center.geometry.location.lat()}&longitude=${center.geometry.location.lat()}`;
        //google.maps.places.PlaceResult
        return this.http.get(url).pipe(
          tap(_ => this.log(`fetched hero id=${center.geometry.location.lat()}`)),
        catchError(this.handleError(`getCenter id=${center.name}`))
      );
    }

        function log(message: string) {
            this.messageService.add('HeroService: ' + message);
          }
        }
    }


