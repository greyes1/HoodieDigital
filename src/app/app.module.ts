import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:AIzaSyDzAW9YMqqCV-x7U7Oy-McPz5BtFcU5fsg
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDzAW9YMqqCV-x7U7Oy-McPz5BtFcU5fsg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
