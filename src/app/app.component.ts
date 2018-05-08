import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'AptSquad';
  lat: number = 41.8781;
  lng: number = -87.6298;

  markers: marker[] = [
    {
      markerLat : 41.8827,
      markerLng : -87.6233,
      label : "Bean",
      draggable : false
    },
    {
      markerLat : 41.8789,
      markerLng : -87.6359,
      label : "Willis Tower",
      draggable : false
    }
  ];
}
interface marker{
  markerLat: number;
  markerLng: number;
  label?: string;
  draggable: boolean;
}
