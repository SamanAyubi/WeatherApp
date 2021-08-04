import * as fromLandingPage from './landing-page.actions';

describe('loadLandingPages', () => {
  it('should return an action', () => {
    expect(fromLandingPage.loadLandingPages().type).toBe('[LandingPage] Load LandingPages');
  });
});
