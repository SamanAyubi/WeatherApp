import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { loadCityForecast } from 'src/app/actions/city-weather.action';
import * as fromRoot from '../../reducers';
import { UI_CONSTANT } from '../../constants/ui.constants';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'city-page',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit, OnDestroy {
  cityForecast$: Observable<any>;
  citylist = [];
  filteredArray = [];
  cityNameQuery: string;
  cityName : string;
  sub: Subscription;
  CONSTANTS = UI_CONSTANT;

  constructor(
    public store: Store<fromRoot.landingPageState>,
    public router: Router,
    public route: ActivatedRoute,
    public location: Location
  ) {
    this.cityForecast$ = store.select(fromRoot.selectFeature);
  }

  ngOnInit() {
    var url = window.location.href;
    this.cityNameQuery = url.split('/').pop();
    this.store.dispatch(loadCityForecast({ city: this.cityNameQuery }));
    this.cityName = this.cityNameQuery.replace(/[^a-zA-Z ]/g, ' ');
    this.sub = this.cityForecast$.subscribe((data) => {
      this.citylist = data?.response?.response?.list;
      if (data?.response?.response?.list) {
        this.filterTimeFunction(this.citylist);
      }
      console.log('filteredArray', this.filteredArray);
    });
  }

  //function to filter 9 am data
  filterTimeFunction(array) {
    array.forEach((element) => {
      if (element.dt_txt.includes(UI_CONSTANT.FILTERBY_NINE_AM)) {
        this.filteredArray.push(element);
      }
    });
    return this.filteredArray;
  }

  public clickBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
