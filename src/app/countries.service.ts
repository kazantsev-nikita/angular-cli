import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Country } from './country';
import { Sort } from './sort';

@Injectable()
export class CountriesService {

  private jsonUrl = 'assets/countries.json';

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(
    private http: Http
  ) { }

  getAll(sort: Sort): Promise<Country[]> {
    return this.http.get(this.jsonUrl)
      .toPromise()
      .then((response: Response) => {
        let data = response.json() && response.json().data;
        data = this.sortData(data, sort);
        return data as Country[];
      })
      .catch(CountriesService.handleError);
  }

  getById(id: string): Promise<Country> {
    return this.http.get(this.jsonUrl)
      .toPromise()
      .then((response: Response) => {
        let country: Country;
        const data = response.json() && response.json().data;
        data.forEach(function(item: any) {
          if (item.id.toString() === id) {
            country = item;
            return;
          }
        });
        return country as Country;
      })
      .catch(CountriesService.handleError);
  }

  search(value: string, sort: Sort): Promise<Country[]> {
    return this.http.get(this.jsonUrl)
      .toPromise()
      .then((response: Response) => {
        let countries: any = [];
        const data = response.json() && response.json().data;
        data.forEach(function(item: any) {
          if (item.title.toLowerCase().indexOf(value) > -1) {
            countries.push(item);
          }
        });
        countries = this.sortData(countries, sort);
        return countries as Country[];
      })
      .catch(CountriesService.handleError);
  }

  sortData(array: any[], sort: Sort): any[] {
    return array.sort(function(x, y) {
      switch (sort.column) {
        case 'Title':
          const nameX = x.title.toLowerCase(), nameY = y.title.toLowerCase();
          if (sort.descending) {
            return (nameX < nameY) ? -1 : ((nameX > nameY) ? 1 : 0);
          } else {
            return (nameX > nameY) ? 0 : ((nameX < nameY) ? 1 : -1);
          }
      }
    });
  }
}
