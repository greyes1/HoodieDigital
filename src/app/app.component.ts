import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent implements OnInit{
  title: string = 'AptSquad';
  public lat: number = 41.8781;
  public lng: number = -87.6298;
  public zoom: number = 10.5;
  public searchControl: FormControl;
  public geoJsonObject: Object;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  public heatMarks: Object[];
  markers: marker[] = [
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
    private dataService: DataService
  ) {}

  getJSON(): void {
    this.dataService.getJSON()
      .subscribe(resGeoJsonData => this.geoJsonObject = resGeoJsonData);
    console.log(this.geoJsonObject);
    console.log(this);
  }
  ngOnInit() {
    this.getJSON();
    console.log('AAAA' + this.dataService.getJSON().subscribe(x => this.heatMarks.push(x)));
    // console.log(this.dataService.getJSON());
    console.log(this.heatMarks);
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
        });
      });
    });

  }
}


function MockHeatLayer(heatLayer) {
  // Adding 500 Data Points
  var map, heatmap;

  var crimeData = [
  ];


  var pointArray = new google.maps.MVCArray(crimeData);
  heatLayer.setData(pointArray);
};


interface marker{
  markerLat: number;
  markerLng: number;
  label?: string;
  draggable: boolean;
}
interface link{
  label?: string;
}

