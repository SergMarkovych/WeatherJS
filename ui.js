class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
    this.body = document.querySelector('body');
  }

  paint(response) {
    this.location.textContent = `${response.weatherData.name},${response.weatherData.sys.country}`;
    this.desc.textContent = response.weatherData.weather[0].description;
    this.string.textContent = response.weatherData.main.temp;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${response.weatherData.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${response.weatherData.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${response.weatherData.main.feels_like}\u00b0C `;
    this.wind.textContent = `Wind Speed: ${response.weatherData.wind.speed}m/s`;
    this.visibility.textContent = `Visibility: ${response.weatherData.visibility}m`;

    if (response.bgData.status !== 404) {
      this.body.style.background = `url(${response.bgData.photos[0].image.web}) no-repeat center center/cover`;
    }
  }
}