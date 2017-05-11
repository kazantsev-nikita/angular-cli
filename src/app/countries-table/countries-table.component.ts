import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Country } from '../country';
import { Sort } from '../sort';

import { CountriesService } from '../countries.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})

export class CountriesTableComponent implements OnInit {

  countries: Country[];
  sort =  new Sort('Title', true);
  public model: any = {};

  constructor(
    private router: Router,
    private service: CountriesService,
  ) { }

  ngOnInit() {
    this.service.getAll(this.sort).then(countries => this.countries = countries);
  }

  gotoDetail(country: Country): void {
    this.router.navigate(['/country', country.id]);
  }

  search(): void {
    if (this.model.value !== undefined && this.model.value.trim() !== '') {
      this.service.search(this.model.value, this.sort).then(countries => this.countries = countries);
    } else {
      this.service.getAll(this.sort).then(countries => this.countries = countries);
    }
  }

  changeSorting(columnName: string): void {
    const sort = this.sort;
    if (sort.column === columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
    this.search();
  }

}
