import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LandingPageEffects } from './landing-page.effects';

describe('LandingPageEffects', () => {
  let actions$: Observable<any>;
  let effects: LandingPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LandingPageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LandingPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
