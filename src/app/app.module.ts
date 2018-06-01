import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';
import { HttpClientModule }    from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTabsModule,
    MatCardModule,
    BrowserModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzAW9YMqqCV-x7U7Oy-McPz5BtFcU5fsg',
      libraries: ['places']
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
