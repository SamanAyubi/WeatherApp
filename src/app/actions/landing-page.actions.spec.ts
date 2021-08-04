import * as fromLandingPage from './landing-page.actions';

describe('loadLandingPages', () => {
  it('should return an action', () => {
    const action = fromLandingPage.loadLandingPages();
    expect({ ...action }).toEqual({
      type: fromLandingPage.loadLandingPages.type,
    });
    expect(action.type).toEqual(fromLandingPage.loadLandingPages.type);
    expect(fromLandingPage.loadLandingPages().type).toBe('[LandingPage] Load LandingPages');
  })

  it('should have loadLandingPagesSuccess called with expected response payload data', () => {
    const payload = null;
    const action = fromLandingPage.loadLandingPagesSuccess({response: payload});
    expect({ ...action }).toEqual({
      response: payload,
      type: fromLandingPage.loadLandingPagesSuccess.type,
    });
    expect(action.type).toEqual(fromLandingPage.loadLandingPagesSuccess.type);
  });
})

