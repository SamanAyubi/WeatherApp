import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { loadLandingPages } from 'src/app/actions/landing-page.actions';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UI_CONSTANT } from '../../constants/ui.constants';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  weatherData$: Observable<any>;
  cityForecast$: Observable<any>;
  citylist;
  cityName;
  sub: Subscription;
  CONSTANTS = UI_CONSTANT;
  constructor(
    public store: Store<fromRoot.landingPageState>,
    public router: Router
  ) {
    this.weatherData$ = store.select(fromRoot.selectFeature);
  }
  ngOnInit() {
    this.store.dispatch(loadLandingPages());
    this.sub = this.weatherData$.subscribe((data) => {
      this.citylist = data?.response?.response?.list;
      console.log('data', this.citylist);
    });
  }

  public nextStep(city) {
    this.router.navigate(['forecast', city]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
