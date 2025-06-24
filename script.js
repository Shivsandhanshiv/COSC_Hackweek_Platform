const apiKey = '035dea0650104342a23a0fd881958e6f'; 
async function getWeather() {
  const city = document.getElementById('city').value.trim();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('result').innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌥️ Forecast: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('result').innerHTML = `<p style="color:red;">❌ Error: ${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById('result').innerHTML = `<p style="color:red;">⚠️ Failed to fetch data. Please try again.</p>`;
  }
}
