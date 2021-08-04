import { createReducer, on } from '@ngrx/store';
import * as weatherActions from '../actions/landing-page.actions';

export interface State {
  isloading: boolean;
  response: any;
}

export const initialState: State = {
  isloading: false,
  response: undefined,
};

export const reducer = createReducer(
  initialState,
  on(weatherActions.loadLandingPages, (state) => ({
    ...state,
    isloading: true,
    response: undefined,
    errorVal: false,
  })),
  on(weatherActions.loadLandingPagesSuccess, (state, payload) => ({
    ...state,
    isloading: false,
    response: payload,
    errorVal: false,
  }))
);
