import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {  } from "./app.component";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : '0G_85KgnDLNyh0rJ9AbgFWuKMO09F-BJxKXr3Jjrnn805bgO49ZkQR8PdPtJFXvzOxY9LmV0rnnPT--igsyHUirA0L6CNLOHfXG1wV8gD8p0lk9l13DjwplIddgNW3Yx'
  })
};

@Injectable()
export class DataServiceService {
  private  restUrl: string = 'https://api.yelp.com/v3/businesses/search';
  constructor(private http: HttpClient) {
//    private http: private http: HttpClient
//private messageService: MessageService
  }

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
  //
    //
    // getPlaces (): Observable<google.maps.places.PlaceResult[]> {
    //   return this.http.get<google.maps.places.PlaceResult[]>(this.restUrl)
    //     .pipe(
    //       tap(heroes => this.log(`fetched heroes`)),
    //       catchError(this.handleError('getPlaces', []))
    //     );
    // }
    getCenter(center: google.maps.places.PlaceResult): Observable<google.maps.places.PlaceResult[]> {
      this.log("constructed");
        const url = `${this.restUrl}/?latitude=${center.geometry.location.lat()}&longitude=${center.geometry.location.lat()}`;
        //google.maps.places.
        return this.http.get<google.maps.places.PlaceResult[]>(url);
      //   return this.http.get(url).pipe(
      //     tap(_ => this.log(`fetched hero id=${center.geometry.location.lat()}`)),
      //   catchError(this.handleError(`getCenter id=${center.name}`))
      // );
    }
    existentialTest(){
      return'I exist!';
    }

        log(message: string) {
        let toPrint = document.getElementById("debug").innerText = 'Yelp Service: ' + message;
          }
        }


