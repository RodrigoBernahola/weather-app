//const APIKEY = 'HS6AWQFTTH59Z4BTL9YWX8P8R';

/* const URLQuery = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/C%C3%B3rdoba/2025-12-19/2025-12-26?unitGroup=metric&include=days%2Ccurrent&key=HS6AWQFTTH59Z4BTL9YWX8P8R&options=usefcst&contentType=json'; */

const JSONdata = {
  "queryCost": 1,
  "latitude": -31.4167,
  "longitude": -64.1833,
  "resolvedAddress": "Córdoba",
  "address": "Córdoba",
  "timezone": "America/Argentina/Cordoba",
  "tzoffset": -3,
  "description": "Similar temperatures continuing with a chance of rain tomorrow, Sunday & Monday.",
  "days": [
    {
      "datetime": "2025-12-19",
      "datetimeEpoch": 1766113200,
      "tempmax": 35.2,
      "tempmin": 27.7,
      "temp": 32.7,
      "feelslikemax": 33.8,
      "feelslikemin": 28,
      "feelslike": 31.7,
      "dew": 12.7,
      "humidity": 31,
      "precip": 0.1,
      "precipprob": 71,
      "precipcover": 4.17,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 48.6,
      "windspeed": 31,
      "winddir": 29.1,
      "pressure": 1001.6,
      "cloudcover": 4.5,
      "visibility": 23.9,
      "solarradiation": 570.2,
      "solarenergy": 24.6,
      "uvindex": 10,
      "severerisk": 10,
      "sunrise": "06:08:19",
      "sunriseEpoch": 1766135299,
      "sunset": "20:19:55",
      "sunsetEpoch": 1766186395,
      "moonphase": 0,
      "conditions": "Rain",
      "description": "Clear conditions throughout the day with late afternoon rain.",
      "icon": "rain",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-20",
      "datetimeEpoch": 1766199600,
      "tempmax": 29.4,
      "tempmin": 19,
      "temp": 23.8,
      "feelslikemax": 29.9,
      "feelslikemin": 19,
      "feelslike": 23.9,
      "dew": 17.9,
      "humidity": 71.4,
      "precip": 14.3,
      "precipprob": 87.1,
      "precipcover": 54.17,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 51.8,
      "windspeed": 21.6,
      "winddir": 114.2,
      "pressure": 1003.6,
      "cloudcover": 48.3,
      "visibility": 19.9,
      "solarradiation": 237.7,
      "solarenergy": 20.5,
      "uvindex": 9,
      "severerisk": 10,
      "sunrise": "06:08:46",
      "sunriseEpoch": 1766221726,
      "sunset": "20:20:26",
      "sunsetEpoch": 1766272826,
      "moonphase": 0.02,
      "conditions": "Rain, Partially cloudy",
      "description": "Partly cloudy throughout the day with a chance of rain throughout the day.",
      "icon": "rain",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-21",
      "datetimeEpoch": 1766286000,
      "tempmax": 28.2,
      "tempmin": 20.2,
      "temp": 24,
      "feelslikemax": 29.6,
      "feelslikemin": 20.2,
      "feelslike": 24.3,
      "dew": 19.4,
      "humidity": 76.3,
      "precip": 12,
      "precipprob": 96.8,
      "precipcover": 54.17,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 37.1,
      "windspeed": 19.1,
      "winddir": 106.1,
      "pressure": 1005,
      "cloudcover": 57.5,
      "visibility": 21.8,
      "solarradiation": 180.7,
      "solarenergy": 15.7,
      "uvindex": 6,
      "severerisk": 30,
      "sunrise": "06:09:14",
      "sunriseEpoch": 1766308154,
      "sunset": "20:20:56",
      "sunsetEpoch": 1766359256,
      "moonphase": 0.05,
      "conditions": "Rain, Partially cloudy",
      "description": "Partly cloudy throughout the day with storms possible.",
      "icon": "rain",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-22",
      "datetimeEpoch": 1766372400,
      "tempmax": 30.7,
      "tempmin": 18.7,
      "temp": 24.2,
      "feelslikemax": 30.3,
      "feelslikemin": 18.7,
      "feelslike": 24.2,
      "dew": 16.5,
      "humidity": 65.9,
      "precip": 5.7,
      "precipprob": 96.8,
      "precipcover": 29.17,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 29.2,
      "windspeed": 14.4,
      "winddir": 76.3,
      "pressure": 1007.9,
      "cloudcover": 56.6,
      "visibility": 22.4,
      "solarradiation": 357.8,
      "solarenergy": 30.8,
      "uvindex": 10,
      "severerisk": 10,
      "sunrise": "06:09:45",
      "sunriseEpoch": 1766394585,
      "sunset": "20:21:25",
      "sunsetEpoch": 1766445685,
      "moonphase": 0.09,
      "conditions": "Rain, Partially cloudy",
      "description": "Clearing in the afternoon with early morning rain.",
      "icon": "rain",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-23",
      "datetimeEpoch": 1766458800,
      "tempmax": 33.4,
      "tempmin": 19.4,
      "temp": 26.3,
      "feelslikemax": 31.7,
      "feelslikemin": 19.4,
      "feelslike": 25.7,
      "dew": 13.5,
      "humidity": 50.2,
      "precip": 1.5,
      "precipprob": 16.1,
      "precipcover": 12.5,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 47.2,
      "windspeed": 24.1,
      "winddir": 165.9,
      "pressure": 1008.8,
      "cloudcover": 8.2,
      "visibility": 23.7,
      "solarradiation": 383.7,
      "solarenergy": 33.1,
      "uvindex": 10,
      "severerisk": 10,
      "sunrise": "06:10:16",
      "sunriseEpoch": 1766481016,
      "sunset": "20:21:52",
      "sunsetEpoch": 1766532112,
      "moonphase": 0.12,
      "conditions": "Clear",
      "description": "Clear conditions throughout the day.",
      "icon": "clear-day",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-24",
      "datetimeEpoch": 1766545200,
      "tempmax": 36.3,
      "tempmin": 22.7,
      "temp": 29,
      "feelslikemax": 34.7,
      "feelslikemin": 22.7,
      "feelslike": 28.4,
      "dew": 12.4,
      "humidity": 37.4,
      "precip": 0,
      "precipprob": 22.6,
      "precipcover": 0,
      "preciptype": null,
      "snow": 0,
      "snowdepth": 0,
      "windgust": 24.8,
      "windspeed": 17.6,
      "winddir": 43.2,
      "pressure": 1007.7,
      "cloudcover": 28.4,
      "visibility": 23.8,
      "solarradiation": 324.6,
      "solarenergy": 27.9,
      "uvindex": 10,
      "severerisk": 10,
      "sunrise": "06:10:49",
      "sunriseEpoch": 1766567449,
      "sunset": "20:22:17",
      "sunsetEpoch": 1766618537,
      "moonphase": 0.16,
      "conditions": "Partially cloudy",
      "description": "Partly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-25",
      "datetimeEpoch": 1766631600,
      "tempmax": 34.5,
      "tempmin": 23.4,
      "temp": 28.5,
      "feelslikemax": 33.9,
      "feelslikemin": 23.4,
      "feelslike": 28.3,
      "dew": 14.9,
      "humidity": 45.1,
      "precip": 0.4,
      "precipprob": 22.6,
      "precipcover": 8.33,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 38.9,
      "windspeed": 19.4,
      "winddir": 116.5,
      "pressure": 1008.9,
      "cloudcover": 76.3,
      "visibility": 24.1,
      "solarradiation": 306.8,
      "solarenergy": 26.6,
      "uvindex": 9,
      "severerisk": 10,
      "sunrise": "06:11:24",
      "sunriseEpoch": 1766653884,
      "sunset": "20:22:41",
      "sunsetEpoch": 1766704961,
      "moonphase": 0.19,
      "conditions": "Partially cloudy",
      "description": "Partly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "stations": null,
      "source": "fcst"
    },
    {
      "datetime": "2025-12-26",
      "datetimeEpoch": 1766718000,
      "tempmax": 34.3,
      "tempmin": 23.6,
      "temp": 28.3,
      "feelslikemax": 34.5,
      "feelslikemin": 23.6,
      "feelslike": 28.7,
      "dew": 18,
      "humidity": 55.1,
      "precip": 1.2,
      "precipprob": 32.3,
      "precipcover": 8.33,
      "preciptype": [
        "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 33.8,
      "windspeed": 31,
      "winddir": 20.6,
      "pressure": 1002.9,
      "cloudcover": 88.6,
      "visibility": 23.9,
      "solarradiation": 262.1,
      "solarenergy": 22.5,
      "uvindex": 8,
      "severerisk": 30,
      "sunrise": "06:11:59",
      "sunriseEpoch": 1766740319,
      "sunset": "20:23:04",
      "sunsetEpoch": 1766791384,
      "moonphase": 0.23,
      "conditions": "Partially cloudy",
      "description": "Partly cloudy throughout the day with storms possible.",
      "icon": "partly-cloudy-day",
      "stations": null,
      "source": "fcst"
    }
  ],
  "stations": {
    "SACO": {
      "distance": 11316,
      "latitude": -31.32,
      "longitude": -64.22,
      "useCount": 0,
      "id": "SACO",
      "name": "SACO",
      "quality": 50,
      "contribution": 0
    },
    "E9018": {
      "distance": 2444,
      "latitude": -31.4,
      "longitude": -64.2,
      "useCount": 0,
      "id": "E9018",
      "name": "EW9018 Cordoba AR",
      "quality": 0,
      "contribution": 0
    }
  },
  "currentConditions": {
    "datetime": "11:20:00",
    "datetimeEpoch": 1766154000,
    "temp": 34.2,
    "feelslike": 32.6,
    "humidity": 23.5,
    "dew": 10.5,
    "precip": 0,
    "precipprob": 0,
    "snow": 0,
    "snowdepth": 0,
    "preciptype": null,
    "windgust": 11.2,
    "windspeed": 7.4,
    "winddir": 275,
    "pressure": 1008,
    "visibility": 10,
    "cloudcover": 0,
    "solarradiation": 1002,
    "solarenergy": 3.6,
    "uvindex": 10,
    "conditions": "Clear",
    "icon": "clear-day",
    "stations": [
      "E9018",
      "SACO"
    ],
    "source": "obs",
    "sunrise": "06:08:19",
    "sunriseEpoch": 1766135299,
    "sunset": "20:19:55",
    "sunsetEpoch": 1766186395,
    "moonphase": 0
  }
}

async function getDataFromAPI(URLQueryToSearch) {

    try {
        const response = await fetch(URLQueryToSearch);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function getCleanData(dataFromAPI) {

    console.log(dataFromAPI);

    const { days } = dataFromAPI;

    daysCleaned = days.map( (day) => {
      return {
        datetime: day.datetime,
        temp: day.temp,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        feelslike: day.feelslike,
        feelslikemax: day.feelslikemax,
        feelslikemin: day.feelslikemin,
        humidity: day.humidity,
        precipprob: day.precipprob,
        sunrise: day.sunrise,
        sunset: day.sunset,
        conditions: day.conditions,
        description: day.description,
        icon: day.icon
      }
    })

    const currentDay = dataFromAPI.currentConditions;

    const currentDayCleaned = {
      conditions: currentDay.conditions,
      datetime: currentDay.datetime,
      temp: currentDay.temp,
      feelslike: currentDay.feelslike,
      humidity: currentDay.humidity,
      precipprob: currentDay.precipprob,
      sunrise: currentDay.sunrise,
      sunset: currentDay.sunset,
      visibility: currentDay.visibility,
      description: dataFromAPI.description
    }

    return {
        address: dataFromAPI.resolvedAddress,
        timezone: dataFromAPI.timezone,
        currentDayCleaned,
        days: daysCleaned
    }
}

function renderData(cleanData) {

  //Render current day
  const actualDateDiv = document.querySelector('.actualDateInfo');
  actualDateDiv.innerHTML = `
            <div class="actualDate">
                <div>Today's information for:</div>
                <div class="firstRow">
                    <div>${cleanData.address}</div>
                    <div>${cleanData.currentDayCleaned.datetime}</div>
                    <div>${cleanData.timezone}</div>
                    <div>Condition</div>
                    <div>${cleanData.currentDayCleaned.conditions}</div>
                </div>
                <div class="secondRow">
                    <div>${cleanData.currentDayCleaned.description}</div>
                </div>
                <div class="thirdRow">
                    <div>Temperature (Average)</div>
                    <div>${cleanData.currentDayCleaned.temp}</div>
                    <div>Feelslike (average)</div>
                    <div>${cleanData.currentDayCleaned.feelslike}</div>
                    <div>Humidity</div>
                    <div>${cleanData.currentDayCleaned.humidity}</div>
                </div>
                <div class="fourthRow">
                    <div>Precipitacion Probability</div>
                    <div>${cleanData.currentDayCleaned.precipprob}</div>
                    <div>Sunrising</div>
                    <div>${cleanData.currentDayCleaned.sunrise}</div>
                    <div>Sunset</div>
                    <div>${cleanData.currentDayCleaned.sunset}</div>
                    <div>Visibility</div>
                    <div>${cleanData.currentDayCleaned.visibility}</div>
                </div>
            </div>`;


    //Render next 7 days from today

    const html = cleanData.days.map( (day) => `
      <div id=${cleanData.days.indexOf(day)}>
          <div class="firstRow">
            <div>${day.datetime}</div>
            <div>${day.conditions}</div>
          </div>
          <div class="secondRow">
            <div>${day.description}</div>
          </div>
          <div class=thirdRow>
            <div>Temperature</div>
            <div>${day.temp}</div>
            <div>Maximum Temperature</div>
            <div>${day.tempmax}</div>
            <div>Minimum Temperature</div>
            <div>${day.tempmin}</div>
          </div>
          <div class="fourthRow">
            <div>Feelslike</div>
            <div>${day.feelslike}</div>
            <div>Max Feelslike</div>
            <div>${day.feelslikemax}</div>
            <div>Min Feelslike</div>
            <div>${day.feelslikemin}</div>
          </div>
          <div class="fifthRow">
            <div>Humidity</div>
            <div>${day.humidity}</div>
            <div>Precipitation Probability</div>
            <div>${day.precipprob}</div>
          </div>
          <div class="sixthRow">
            <div>Sunrise</div>
            <div>${day.sunrise}</div>
            <div>Sunset</div>
            <div>${day.sunset}</div>
          </div>
      </div>
    
    `).join('');
 
    const sevenDaysDiv = document.querySelector('.sevenDaysDiv');
    sevenDaysDiv.innerHTML += html;

}


function handleClick(e) {

  //Obtener la location desde el input
  const stringQuery = document.querySelector('#location');
  console.log(stringQuery.value);

  if (stringQuery.value === '') {
    console.log("No se ingresó location");
    return
  };
  
  let currentDate = new Date();
  let futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 7);

  currentDateFormatted = currentDate.toISOString().split('T')[0];
  futureDateFormatted = futureDate.toISOString().split('T')[0];


  //DESCOMENTAR CUANDO ESTÉ TODO ESTILIZADO CON EL MOCKUP DE JSON


  /* let URLQueryToSearch = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${stringQuery.value}/${currentDateFormatted}/${futureDateFormatted}?unitGroup=metric&include=days%2Ccurrent&key=HS6AWQFTTH59Z4BTL9YWX8P8R&options=usefcst&contentType=json`; 

  getDataFromAPI(URLQueryToSearch).then((data) => 
    { let cleanedData = getCleanData(data);
      console.log(cleanedData);
      renderData(cleanedData);
    }
  ); */

}

/* const searchButton = document.querySelector('button');

searchButton.addEventListener('click', (e) => handleClick(e)) */

document.addEventListener('DOMContentLoaded', () => {

  let res = getCleanData(JSONdata);
  console.log(res);
  renderData(res);


})