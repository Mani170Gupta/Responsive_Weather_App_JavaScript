document.getElementById('btn').addEventListener('click', async () => {
    let cityName = document.getElementById('city').value;
    
    if (!cityName) {
        document.getElementById('EnterCorrectCity').innerHTML = 'Please enter the city name.';
        return;
    }

        let url = `http://api.weatherapi.com/v1/current.json?key=35e0c5f53b60451f8ac181533252601&q=${cityName}&aqi=yes`;
    
        const response = await fetch(url);


        const data = await response.json();
        if (!data.location || !data.location.name) {
            document.getElementById('EnterCorrectCity').innerHTML='City not found'
        }

       
        document.getElementById('lat').innerText = `Latitude: ${data.location.lat}`;
        document.getElementById('lon').innerText = `Longitude: ${data.location.lon}`;
        document.getElementById('tz_id').innerText = `Timezone: ${data.location.tz_id}`;
        document.getElementById('name').innerText = `Location: ${data.location.name}`;
        document.getElementById('region').innerText = `Region: ${data.location.region}`;
        document.getElementById('co').innerText = `CO: ${data.current.air_quality.co}`;
        document.getElementById('no2').innerText = `NO2: ${data.current.air_quality.no2}`;
        document.getElementById('o3').innerText = `O3: ${data.current.air_quality.o3}`;
        document.getElementById('so2').innerText = `SO2: ${data.current.air_quality.so2}`;
        document.getElementById('pm25').innerText = `PM 2.5: ${data.current.air_quality.pm2_5}`;
        document.getElementById('temp').innerText = `Temperature: ${data.current.temp_c} °C`;
        document.getElementById('feelslike').innerText = `Feels Like: ${data.current.feelslike_c} °C`;
        document.getElementById('wind').innerText = `Wind Speed: ${data.current.wind_mph} mph`;
        document.getElementById('pressure').innerText = `Pressure: ${data.current.pressure_mb} mb`;
        document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById('cloud').innerText = `Cloud Coverage: ${data.current.cloud}%`;
        document.getElementById('uv').innerText = `UV Index: ${data.current.uv}`;
        document.getElementById('visibility').innerText = `Visibility: ${data.current.vis_km} km`;
        document.getElementById('gust').innerText = `Gust Speed: ${data.current.gust_mph} mph`;
        document.getElementById('last_updated').innerText = `Last Updated: ${data.current.last_updated}`;
        document.getElementById('condition').innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById('icon').src = `//cdn.weatherapi.com/weather/64x64/day/${data.current.condition.code}.png`;
    
});
