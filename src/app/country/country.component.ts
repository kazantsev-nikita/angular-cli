import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Country } from '../country';

import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private country: Country;

  constructor(
    private service: CountriesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getById(params['id']))
      .subscribe(country => this.country = country);
  }

}
