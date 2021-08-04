import { createAction, props } from '@ngrx/store';

export const loadLandingPages = createAction(
  '[LandingPage] Load LandingPages'
);

export const loadLandingPagesSuccess = createAction(
  '[LandingPage] Load LandingPages Success',
  props<{ response: any }>()
);

