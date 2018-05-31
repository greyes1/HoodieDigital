import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title: string = 'AptSquad';
  public lat: number = 41.8781;
  public lng: number = -87.6298;
  public zoom: number = 10.5;
  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  markers: marker[] = [
    {
      markerLat: 41.8827,
      markerLng: -87.6233,
      label: 'Bean',
      draggable: false
    },
    {
      markerLat: 41.8789,
      markerLng: -87.6359,
      label: 'Willis Tower',
      draggable: false
    }
  ];

  navLinks: link[] = [
    {
      label: 'College'
    },
    {
      label: 'Restaurants'
    },
    {
      label: 'Lifestyle'
    },
    {
      label: 'Crime'
    },
    {
      label: 'Entertainment'
    },
    {
      label: 'Transit'
    }
  ];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private DataService: DataService
  ) {}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.markers.push({markerLat: place.geometry.location.lat(), markerLng: place.geometry.location.lng(),
            label: place.name, draggable: false});

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;

          this.DataService.getJSON().subscribe(data => {
            console.log(data);
          });
        });
      });
    });

  }
}
/*
function for adding heat map layer later on after we figure out how to import data

function MockHeatLayer(heatLayer) {
  // Adding 500 Data Points
  var map, pointarray, heatmap;

  var crimeData = [
    new google.maps.LatLng(37.782551, -122.445368),
    new google.maps.LatLng(37.782745, -122.444586),
    new google.maps.LatLng(37.782842, -122.443688),
    new google.maps.LatLng(37.782919, -122.442815),
    new google.maps.LatLng(37.782992, -122.442112),
    new google.maps.LatLng(37.783100, -122.441461),
    new google.maps.LatLng(37.783206, -122.440829),
    new google.maps.LatLng(37.783273, -122.440324),
    new google.maps.LatLng(37.783316, -122.440023),
    new google.maps.LatLng(37.783357, -122.439794),
    new google.maps.LatLng(37.783371, -122.439687)
  ];


  var pointArray = new google.maps.MVCArray(crimeData);
  heatLayer.setData(pointArray);
};
*/

interface marker{
  markerLat: number;
  markerLng: number;
  label?: string;
  draggable: boolean;
}
interface link{
  label?: string;
}

