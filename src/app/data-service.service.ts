import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataServiceService {
  constructor(private http: HttpClient){  }

}
