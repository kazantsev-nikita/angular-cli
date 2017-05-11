import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesTableComponent } from '../countries-table/countries-table.component';
import { CountryComponent } from '../country/country.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: CountriesTableComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
