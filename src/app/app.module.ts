import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountryComponent } from './country/country.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { CountriesService} from './countries.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesTableComponent,
    CountryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
