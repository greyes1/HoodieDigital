import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { NavComponent } from './nav/nav.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { GeoService } from './geo.service';
import { DataService } from './data.service';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';



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
    MatChipsModule,
    FormsModule,
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
