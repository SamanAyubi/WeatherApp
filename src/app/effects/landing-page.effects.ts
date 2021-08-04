import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { apiUrls } from '../constants/api-url.constant';
import {
  loadLandingPages,
  loadLandingPagesSuccess,
} from '../actions/landing-page.actions';

import {
  loadCityForecast,
  loadCityForecastSuccess,
} from '../actions/city-weather.action';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class LandingPageEffects {
  private ApiURL = apiUrls.CITY_API_URL;

  validateEmailData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loadLandingPages),
      switchMap((_action) => {
        return this.http.get(this.ApiURL).pipe(
          map((data) => {
            // Dispatching success action
            return loadLandingPagesSuccess({ response: data });
          }),
           // throw error
          catchError((e) => throwError(e))
        );
      })
    )
  );

  cityWeatherData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loadCityForecast),
      switchMap((action) => {
        const url = apiUrls.BASE_URL(action.city);
        return this.http.get(url).pipe(
          map((data) => {
             // Dispatching success action
            return loadCityForecastSuccess({ response: data });
          }),
          // throw error
          catchError((e) => throwError(e))
        );
      })
    )
  );

  constructor(
    private action$: Actions,
    private http: HttpClient
  ) {}
}
