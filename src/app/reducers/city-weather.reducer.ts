import { createReducer, on } from '@ngrx/store';
import * as cityWeatherActions from '../actions/city-weather.action';

export interface cityState {
  isloading: boolean;
  response: any;
}

export const initialState: cityState = {
  isloading: false,
  response: undefined,
};

export const reducer = createReducer(
  initialState,
  on(cityWeatherActions.loadCityForecast, (state) => ({
    ...state,
    isloading: true,
    response: undefined,
  })),
  on(cityWeatherActions.loadCityForecastSuccess, (state, payload) => ({
    ...state,
    isloading: false,
    response: payload,
  }))
);
