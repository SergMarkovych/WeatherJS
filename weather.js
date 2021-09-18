//@ts-check
//https://home.openweathermap.org/api_keys

// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
class Weather {
  constructor(city) {
    this.apiKey = '137217402ecf6a936adf6cfb4ebbd5ad';
    this.imgUrl = 'http://openweathermap.org/img/w/';
    this.mainUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`${this.mainUrl}?q=${this.city}&units=metric&appid=${this.apiKey}`);
    const weatherData = await response.json();

    const responseBg = await fetch(`https://api.teleport.org/api/urban_areas/slug:${this.city.toLowerCase()}/images/`);
    const bgData = await responseBg.json();

    return {
      weatherData,
      bgData
    };
  }

  changeLocation(city) {
    this.city = city;
  }
}