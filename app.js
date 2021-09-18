//@ts-check
const storage = new LocalStorage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();


  const modal = document.getElementById('locModal');
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(response => {
      ui.paint(response);
    })
    .catch(err => console.log('Error111: ', err));
}