import {Component } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'AptSquad';
  lat: number = 41.881832;
  lng: number = -87.623177;
}

