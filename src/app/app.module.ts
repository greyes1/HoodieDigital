//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { GeoService } from './geo.service';
import { DataService } from './data.service';
import {CommonModule} from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { NavComponent } from './nav/nav.component';


//material imports
import { MaterialModule } from '../material.module';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginDialogComponent,
    MyDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      // please get your own API key here:AIzaSyDzAW9YMqqCV-x7U7Oy-McPz5BtFcU5fsg
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDzAW9YMqqCV-x7U7Oy-McPz5BtFcU5fsg',
      libraries: ['places']
    }),
    HttpClientModule
  ],
  providers: [GeoService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule { }
