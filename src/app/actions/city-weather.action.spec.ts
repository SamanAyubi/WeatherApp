import * as fromCityWeatherPage from './city-weather.action';

describe('fromCityWeatherPage', () => {
  it('should return an action', () => {
    const action = fromCityWeatherPage.loadCityForecast;
    expect({ ...action }).toEqual({
      type: fromCityWeatherPage.loadCityForecast.type,
    });
    expect(action.type).toEqual(fromCityWeatherPage.loadCityForecast.type);
    expect(fromCityWeatherPage.loadCityForecast.type).toBe('[CityPage] Load City Pages');
  })

  it('should have loadCityForecastSuccess called with expected response payload data', () => {
    const payload = null;
    const action = fromCityWeatherPage.loadCityForecastSuccess({response: payload});
    expect({ ...action }).toEqual({
      response: payload,
      type: fromCityWeatherPage.loadCityForecastSuccess.type,
    });
    expect(action.type).toEqual(fromCityWeatherPage.loadCityForecastSuccess.type);
  });
})
