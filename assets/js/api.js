

'use strict';




/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */

export const fetchData = function (URL, callback) {
  // Fetch the API key from config.json
  fetch('./config.json')
    .then(response => response.json())
    .then(config => {
      const api_key = config.API_KEY;
      //const api_key = "36bd224193758a4cb9129d775ec3fd6e";
      return fetch(`${URL}&appid=${api_key}`);
    })
    .then(res => res.json())
    .then(data => callback(data))
    .catch(error => console.error('Error loading API key or data:', error));
}

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  /**
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
}
