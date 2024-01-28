  const { createApp } = Vue

  createApp({
    data() {
      return {
        apiUrl : "https://api.openweathermap.org/data/2.5/weather?",
        apiKey : "17133b4ffe4294e48a925169f403cdcd",
        temperature : null,
        city : null,
        humidity : null,
        returnCity : null,
        weatherImg :null
      }
    },
    methods: {
      searchCity : function(){
        event.preventDefault();
        if (this.city === null){
          alert("please insert a city!")
        } else {
          this.checkWeather()
        }

      },
      checkWeather :async function(){
        const response = await fetch(this.apiUrl +  `q=${this.city}` + `&appid=${this.apiKey}` + '&units=metric');
        if (response.ok){
          let data = await response.json();
          console.log(data);
          this.temperature =`${ Math.round(data.main.temp)} C°`;
          this.returnCity = this.city.toUpperCase();
          this.weatherImg = `./img/${data.weather[0].main}.svg`;
          this.humidity = `Humidity ${data.main.humidity}%`,
          console.log(this.weatherImg)
        } else {
          alert("please try with another city or check the typo!")
        }
      }
    
  }
}).mount('#app')
