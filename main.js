const APIKEY = "HS6AWQFTTH59Z4BTL9YWX8P8R"

// Estado de la aplicación
let currentUnit = "celsius" // 'celsius' o 'fahrenheit'
let currentData = null

// Elementos del DOM
const searchForm = document.getElementById("search-form")
const locationInput = document.getElementById("location")
const unitToggle = document.getElementById("unit-toggle")
const celsiusLabel = document.getElementById("celsius-label")
const fahrenheitLabel = document.getElementById("fahrenheit-label")
const loadingEl = document.getElementById("loading")
const errorEl = document.getElementById("error-message")
const mainContent = document.getElementById("main-content")

// Iconos del clima
const weatherIcons = {
  "clear-day": "☀️",
  "clear-night": "🌙",
  "partly-cloudy-day": "⛅",
  "partly-cloudy-night": "☁️",
  cloudy: "☁️",
  rain: "🌧️",
  "showers-day": "🌦️",
  "showers-night": "🌧️",
  "thunder-rain": "⛈️",
  "thunder-showers-day": "⛈️",
  "thunder-showers-night": "⛈️",
  snow: "❄️",
  "snow-showers-day": "🌨️",
  "snow-showers-night": "🌨️",
  fog: "🌫️",
  wind: "💨",
  hail: "🌨️",
}

// Mapeo de iconos a clases de fondo
const backgroundClasses = {
  "clear-day": "clear-day",
  "clear-night": "clear-night",
  "partly-cloudy-day": "partly-cloudy",
  "partly-cloudy-night": "cloudy",
  cloudy: "cloudy",
  rain: "rain",
  "showers-day": "rain",
  "showers-night": "rain",
  "thunder-rain": "storm",
  "thunder-showers-day": "storm",
  "thunder-showers-night": "storm",
  snow: "snow",
  "snow-showers-day": "snow",
  "snow-showers-night": "snow",
  fog: "fog",
  wind: "cloudy",
  hail: "storm",
}

// Obtener datos de la API
async function getDataFromAPI(location) {
  const currentDate = new Date()
  const futureDate = new Date()
  futureDate.setDate(currentDate.getDate() + 7)

  const currentDateFormatted = currentDate.toISOString().split("T")[0]
  const futureDateFormatted = futureDate.toISOString().split("T")[0]

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/${currentDateFormatted}/${futureDateFormatted}?unitGroup=metric&include=days%2Ccurrent&key=${APIKEY}&options=usefcst&contentType=json`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Location not found")
  }
  return await response.json()
}

// Limpiar y procesar datos
function getCleanData(dataFromAPI) {
  const { days } = dataFromAPI

  const daysCleaned = days.map((day) => ({
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
    icon: day.icon,
  }))

  const currentDay = dataFromAPI.currentConditions

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
    description: dataFromAPI.description,
    icon: currentDay.icon,
  }

  return {
    address: dataFromAPI.resolvedAddress,
    timezone: dataFromAPI.timezone,
    currentDayCleaned,
    days: daysCleaned,
  }
}

// Convertir temperatura
function convertTemp(tempCelsius) {
  if (currentUnit === "fahrenheit") {
    return Math.round((tempCelsius * 9) / 5 + 32)
  }
  return Math.round(tempCelsius)
}

// Formatear fecha
function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

// Obtener día de la semana
function getDayName(dateString, index) {
  if (index === 0) return "Today"
  if (index === 1) return "Tomorrow"
  const date = new Date(dateString + "T00:00:00")
  return date.toLocaleDateString("en-US", { weekday: "short" })
}

// Formatear hora
function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":")
  const hour = Number.parseInt(hours)
  const ampm = hour >= 12 ? "PM" : "AM"
  const formattedHour = hour % 12 || 12
  return `${formattedHour}:${minutes} ${ampm}`
}

// Obtener icono del clima
function getWeatherIcon(iconCode) {
  return weatherIcons[iconCode] || "🌡️"
}

// Cambiar fondo según el clima
function setBackground(iconCode) {
  const body = document.body
  // Remover todas las clases de fondo
  body.classList.remove("clear-day", "clear-night", "cloudy", "rain", "snow", "storm", "fog", "partly-cloudy")
  // Agregar la clase correspondiente
  const bgClass = backgroundClasses[iconCode] || "clear-day"
  body.classList.add(bgClass)
}

// Renderizar datos
function renderData(cleanData) {
  // Cambiar fondo
  setBackground(cleanData.currentDayCleaned.icon)

  // Renderizar clima actual
  document.getElementById("city-name").textContent = cleanData.address
  document.getElementById("current-date").textContent = formatDate(cleanData.days[0].datetime)
  document.getElementById("weather-icon-large").textContent = getWeatherIcon(cleanData.currentDayCleaned.icon)
  document.getElementById("current-temp").textContent = convertTemp(cleanData.currentDayCleaned.temp)
  document.getElementById("weather-condition").textContent = cleanData.currentDayCleaned.conditions
  document.getElementById("weather-description").textContent = cleanData.currentDayCleaned.description
  document.getElementById("feels-like").textContent = `${convertTemp(cleanData.currentDayCleaned.feelslike)}°`
  document.getElementById("humidity").textContent = `${cleanData.currentDayCleaned.humidity}%`
  document.getElementById("precip-prob").textContent = `${cleanData.currentDayCleaned.precipprob}%`
  document.getElementById("sunrise").textContent = formatTime(cleanData.currentDayCleaned.sunrise)
  document.getElementById("sunset").textContent = formatTime(cleanData.currentDayCleaned.sunset)
  document.getElementById("visibility").textContent = `${cleanData.currentDayCleaned.visibility} km`

  // Renderizar pronóstico de 7 días
  const forecastGrid = document.getElementById("forecast-grid")
  forecastGrid.innerHTML = cleanData.days
    .map(
      (day, index) => `
        <div class="forecast-card ${index === 0 ? "today" : ""}">
            <div class="forecast-day">${getDayName(day.datetime, index)}</div>
            <div class="forecast-date">${formatDate(day.datetime).split(",")[1]}</div>
            <div class="forecast-icon">${getWeatherIcon(day.icon)}</div>
            <div class="forecast-temps">
                <span class="temp-high">${convertTemp(day.tempmax)}°</span>
                <span class="temp-low">${convertTemp(day.tempmin)}°</span>
            </div>
            <div class="forecast-condition">${day.conditions}</div>
            <div class="forecast-details">
                <div class="forecast-detail">
                    <span class="forecast-detail-label">💧</span>
                    <span class="forecast-detail-value">${day.humidity}%</span>
                </div>
                <div class="forecast-detail">
                    <span class="forecast-detail-label">🌧️</span>
                    <span class="forecast-detail-value">${day.precipprob}%</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Mostrar estado de carga
function showLoading() {
  loadingEl.classList.add("show")
  errorEl.classList.remove("show")
  mainContent.classList.add("hidden")
}

// Ocultar estado de carga
function hideLoading() {
  loadingEl.classList.remove("show")
}

// Mostrar error
function showError() {
  errorEl.classList.add("show")
  mainContent.classList.add("hidden")
}

// Mostrar contenido
function showContent() {
  mainContent.classList.remove("hidden")
  errorEl.classList.remove("show")
}

// Manejar búsqueda
async function handleSearch(e) {
  e.preventDefault()
  const location = locationInput.value.trim()

  if (!location) return

  showLoading()

  try {
    const data = await getDataFromAPI(location)
    currentData = getCleanData(data)
    hideLoading()
    showContent()
    renderData(currentData)
  } catch (error) {
    console.error("Error:", error.message)
    hideLoading()
    showError()
  }
}

// Manejar cambio de unidades
function handleUnitToggle() {
  if (unitToggle.checked) {
    currentUnit = "fahrenheit"
    fahrenheitLabel.classList.add("active")
    celsiusLabel.classList.remove("active")
  } else {
    currentUnit = "celsius"
    celsiusLabel.classList.add("active")
    fahrenheitLabel.classList.remove("active")
  }

  // Re-renderizar si hay datos
  if (currentData) {
    renderData(currentData)
  }
}

// Event listeners
searchForm.addEventListener("submit", handleSearch)
unitToggle.addEventListener("change", handleUnitToggle)

// Inicialización - Usar datos de muestra
document.addEventListener("DOMContentLoaded", () => {
  celsiusLabel.classList.add("active")

  // Datos de muestra para demostración inicial
  const JSONdata = {
    queryCost: 1,
    latitude: -31.4167,
    longitude: -64.1833,
    resolvedAddress: "Córdoba, Argentina",
    address: "Córdoba",
    timezone: "America/Argentina/Cordoba",
    tzoffset: -3,
    description: "Similar temperatures continuing with a chance of rain tomorrow, Sunday & Monday.",
    days: [
      {
        datetime: "2025-12-19",
        tempmax: 35.2,
        tempmin: 27.7,
        temp: 32.7,
        feelslike: 31.7,
        feelslikemax: 33.8,
        feelslikemin: 28,
        humidity: 31,
        precipprob: 71,
        sunrise: "06:08:19",
        sunset: "20:19:55",
        conditions: "Rain",
        description: "Clear conditions throughout the day with late afternoon rain.",
        icon: "rain",
      },
      {
        datetime: "2025-12-20",
        tempmax: 29.4,
        tempmin: 19,
        temp: 23.8,
        feelslike: 23.9,
        feelslikemax: 29.9,
        feelslikemin: 19,
        humidity: 71.4,
        precipprob: 87.1,
        sunrise: "06:08:46",
        sunset: "20:20:26",
        conditions: "Rain, Partially cloudy",
        description: "Partly cloudy throughout the day with a chance of rain.",
        icon: "rain",
      },
      {
        datetime: "2025-12-21",
        tempmax: 28.2,
        tempmin: 20.2,
        temp: 24,
        feelslike: 24.3,
        feelslikemax: 29.6,
        feelslikemin: 20.2,
        humidity: 76.3,
        precipprob: 96.8,
        sunrise: "06:09:14",
        sunset: "20:20:56",
        conditions: "Rain, Partially cloudy",
        description: "Partly cloudy throughout the day with storms possible.",
        icon: "rain",
      },
      {
        datetime: "2025-12-22",
        tempmax: 30.7,
        tempmin: 18.7,
        temp: 24.2,
        feelslike: 24.2,
        feelslikemax: 30.3,
        feelslikemin: 18.7,
        humidity: 65.9,
        precipprob: 96.8,
        sunrise: "06:09:45",
        sunset: "20:21:25",
        conditions: "Rain, Partially cloudy",
        description: "Clearing in the afternoon with early morning rain.",
        icon: "rain",
      },
      {
        datetime: "2025-12-23",
        tempmax: 33.4,
        tempmin: 19.4,
        temp: 26.3,
        feelslike: 25.7,
        feelslikemax: 31.7,
        feelslikemin: 19.4,
        humidity: 50.2,
        precipprob: 16.1,
        sunrise: "06:10:16",
        sunset: "20:21:52",
        conditions: "Clear",
        description: "Clear conditions throughout the day.",
        icon: "clear-day",
      },
      {
        datetime: "2025-12-24",
        tempmax: 36.3,
        tempmin: 22.7,
        temp: 29,
        feelslike: 28.4,
        feelslikemax: 34.7,
        feelslikemin: 22.7,
        humidity: 37.4,
        precipprob: 22.6,
        sunrise: "06:10:49",
        sunset: "20:22:17",
        conditions: "Partially cloudy",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "2025-12-25",
        tempmax: 34.5,
        tempmin: 23.4,
        temp: 28.5,
        feelslike: 28.3,
        feelslikemax: 33.9,
        feelslikemin: 23.4,
        humidity: 45.1,
        precipprob: 22.6,
        sunrise: "06:11:24",
        sunset: "20:22:41",
        conditions: "Partially cloudy",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "2025-12-26",
        tempmax: 34.3,
        tempmin: 23.6,
        temp: 28.3,
        feelslike: 28.7,
        feelslikemax: 34.5,
        feelslikemin: 23.6,
        humidity: 55.1,
        precipprob: 32.3,
        sunrise: "06:11:59",
        sunset: "20:23:04",
        conditions: "Partially cloudy",
        description: "Partly cloudy throughout the day with storms possible.",
        icon: "partly-cloudy-day",
      },
    ],
    currentConditions: {
      datetime: "11:20:00",
      temp: 34.2,
      feelslike: 32.6,
      humidity: 23.5,
      precipprob: 0,
      sunrise: "06:08:19",
      sunset: "20:19:55",
      visibility: 10,
      conditions: "Clear",
      icon: "clear-day",
    },
  }

  currentData = getCleanData(JSONdata)
  renderData(currentData)
})
