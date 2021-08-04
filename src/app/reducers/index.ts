import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as landingageStore from '../reducers/landing-page.reducer';
import * as cityWeatherStore from '../reducers/city-weather.reducer';


export interface landingPageState {
  landingPageData: landingageStore.State,
  cityWeatherData: cityWeatherStore.cityState
}

export const landingPageReducer : ActionReducerMap<landingPageState> = {
  landingPageData: landingageStore.reducer,
  cityWeatherData: cityWeatherStore.reducer

};

export const selectFeature = (state: landingPageState) => state.landingPageData;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: landingageStore.State) => state.response
);

export const selectFeatureCityWeather = createSelector(
  selectFeature,
  (state: cityWeatherStore.cityState) => state.response
);


