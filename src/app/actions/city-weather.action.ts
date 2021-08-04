import { createAction, props } from '@ngrx/store';

export const loadCityForecast= createAction(
  '[LandingPage] Load LandingPages Success',
  props<{ city: string }>()
);

export const loadCityForecastSuccess= createAction(
  '[LandingPage] Load LandingPages Success',
  props<{ response: any }>()
);
