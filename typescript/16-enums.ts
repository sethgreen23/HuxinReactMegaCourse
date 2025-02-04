enum weatherConditions {
  Sunny,
  Rainy,
  Cloudy,
  Windy,
}

enum weatherConditions1 {
  Sunny = "Sunny",
  Rainy = "Rainy",
  Cloudy = "Cloudy",
  Windy = "Windy",
}

const todayWeather: weatherConditions = weatherConditions.Sunny;
console.log(todayWeather);
const todayWeather1: weatherConditions1 = weatherConditions1.Sunny;
console.log(todayWeather1);

console.log(weatherConditions1)