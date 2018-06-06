import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataServiceService }  from './data-service.service';
import { } from 'googlemaps';



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
  public placeCenter: string = "Please enter a place for us to center your search around";
  public indexValue: string;

  public geoJsonObject: Object;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  //Stores the markers that are displayed to the map
  public markers: marker[] = [
    // {
    //   markerLat: 41.8827,
    //   markerLng: -87.6233,
    //   label: "Bean",
    //   draggable: false
    // },
    // {
    //   markerLat: 41.8789,
    //   markerLng: -87.6359,
    //   label: "Willis Tower",
    //   draggable: false
    // }

];
  public heatMarks: Object[];

  public searchMarkers: marker[];
  navLinks: link[] = [
    {
      label: "Restaurants"
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
  selected: string[]=[];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private dataService: DataService
  ) {}

  // These methods add the selected chip to the selected array, and remove the chip if it's re-selected
  checkRestaurants(): void{
    if(this.selected.includes("Restaurant")){
      this.selected[this.selected.indexOf("Restaurant")] = "";
    }else{
      this.selected.push("Restaurant");
    }
    this.updateThing();
  }
  checkLifestyle(): void{
    if(this.selected.includes("Lifestyle")){
      this.selected[this.selected.indexOf("Lifestyle")] = "";
    }else{
      this.selected.push("Lifestyle");
    }
    this.updateThing();
  }
  checkCrime(): void{
    if(this.selected.includes("Crime")){
      this.selected[this.selected.indexOf("Crime")] = "";
    }else{
      this.selected.push("Crime");
    }
    this.updateThing();
  }
  checkEntertainment(): void{
    if(this.selected.includes("Entertainment")){
      this.selected[this.selected.indexOf("Entertainment")] = "";
    }else{
      this.selected.push("Entertainment");
    }
    this.updateThing();
  }
  checkTransit(): void{
    if(this.selected.includes("Transit")){
      this.selected[this.selected.indexOf("Transit")] = "";
    }else{
      this.selected.push("Transit");
    }
    this.updateThing();
  }
  //Updates the debug element that displays the selected chips
  updateThing(){
    document.getElementById("debug").innerText = "Buttons Pressed: " + this.selected.toString();
  }
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
      // let search = new google.maps.places.PlacesService(doucment.get);

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //This is where the data is added to the array that displays to the map
          this.markers.push({placeObj: place, markerLat: place.geometry.location.lat(), markerLng: place.geometry.location.lng(),
                            label: place.name, draggable: false, listSpot:this.markers.length});
          //The first item added is used as the center point, and every subsequent item is displayed as a "nearby result" however due to issues with displaying nearby establishemnts it only displays the items entered in the search box
          // this.log(place.name);
          // this.indexValue = listSpot.toString();
          // document.getElementById("placeCenter").innerText = place.name;
          // document.getElementById("indexValue").innerText = this.markers.length.toString();
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
  placeObj: google.maps.places.PlaceResult;
  markerLat: number;
  markerLng: number;
  label?: string;
  draggable: boolean;
  listSpot:number;
}
interface link{
  label?: string;
}

