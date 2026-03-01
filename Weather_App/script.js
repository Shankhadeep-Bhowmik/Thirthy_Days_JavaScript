const inputCity = document.getElementById('inputCity'); // text input
const description = document.getElementById('description');
const searchBtn = document.getElementById('searchBtn');
const icon = document.getElementById('icon');
const temp = document.getElementById('temp');
const name = document.getElementById('name');
const hum = document.getElementById('hum');
const ws = document.getElementById('ws');
const detailIcon = document.querySelectorAll('.detailsIcon');


searchBtn.addEventListener('click', async () => {
  try {
    let city = inputCity.value.trim();
    if(city===''){
      alert('Enter city name');
      return;
    }
    const key = '650f642bd743babd02a6576aa7c324db';
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`);
    let data = await response.json();
    icon.src = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
    description.textContent = data.weather[0].description;
    let a = data.main.temp;
    temp.textContent = `${parseInt((a-32)*5/9)}°C`;
    hum.textContent = `Humidity: ${data.main.humidity}`;
    ws.textContent = `Wind Speed: ${data.wind.speed}`;
    name.textContent = data.name;
    detailIcon.forEach(val => val.style.display='inline-block');

  } catch (error) {
    console.log(error);
  }
})

