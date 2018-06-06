import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//data service used to pull json data from local file
@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      return this.http.get('./assets/cityCrimeData.json');
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/cityCrimeData.json');
  }

}


