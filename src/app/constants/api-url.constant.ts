export const apiUrls = {
  BASE_URL: (cityname: string) => `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=3d8b309701a13f65b660fa2c64cdc517`,
  CITY_API_URL: 'https://api.openweathermap.org/data/2.5/find?lat=56&lon=-0&cnt=5&appid=3d8b309701a13f65b660fa2c64cdc517'
}
