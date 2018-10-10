import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AuctionSearchComponent } from './auction-search/auction-search.component';
import { environment} from '../environments/environment';
import { SearchResultsService } from './shared/search-results.service';
import { LocationService } from './shared/location.service';



@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    AuctionSearchComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [DatePipe, SearchResultsService , LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
