import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataServiceService }  from './data-service.service';
import { } from 'googlemaps';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title: string = 'AptSquad';
  public lat: number = 41.8781;
  public lng: number = -87.6298;
  public zoom: number = 8;
  public searchControl: FormControl;


  @ViewChild("search")
  public searchElementRef: ElementRef;

  public markers: marker[] = [
    {
      markerLat: 41.8827,
      markerLng: -87.6233,
      label: "Bean",
      draggable: false
    },
    {
      markerLat: 41.8789,
      markerLng: -87.6359,
      label: "Willis Tower",
      draggable: false
    }
  ];
  navLinks: link[] = [
    {
      label: "College"
    },
    {
      label: "Restaurants"
    },
    {
      label: "Lifestyle"
    },
    {
      label: "Crime"
    },
    {
      label: "Entertainment"
    },
    {
      label: "Transit"
    }
  ];


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    //private dataServiceService: DataServiceService
  ) {}


  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //This is where the data is added to the array that displays to the map
          this.markers.push({markerLat: place.geometry.location.lat(), markerLng: place.geometry.location.lng(),
                            label: place.name, draggable: false});

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 15;
          //this.getHeroes();
          //Issue Here:
          //this.dataServiceService.getCenter(<google.maps.places.PlaceResult>place).subscribe(markers => this.markers = markers);
        });
      });

    });
  }
  //And here:
  // getHeroes(): void {
  //   this.dataServiceService.getPlaces().subscribe(markers => this.markers= markers);
  // }
}
interface marker{
  markerLat: number;
  markerLng: number;
  label?: string;
  draggable: boolean;
}
interface link{
  label?: string;
}

