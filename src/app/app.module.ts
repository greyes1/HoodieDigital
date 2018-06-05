import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';
// import { HttpClientModule }    from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatCardModule } from '@angular/material/card';


// import { AgmCoreModule } from '@agm/core';
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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LoginDialogComponent,
    NavComponent,
    AngularFireModule,
    environment,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
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
