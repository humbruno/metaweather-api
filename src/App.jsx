import React, { useState } from "react";
import axios from "axios";

import cities from "./data/cities";

import GlobalStyles from "./components/styles/Global";
import { Card } from "./components/styles/Card.styled";
import { Button } from "./components/styles/Button.styled";
import { FlexContainer } from "./components/styles/FlexContainer.styled";
import ForecastItem from "./components/ForecastItem/ForecastItem";

function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const fetchWeather = async (woeid) => {
    try {
      const response = await axios.get(
        `https://www.metaweather.com/api/location/${woeid}`
      );
      setWeatherInfo(response.data.consolidated_weather.slice(1)); //The array gets sliced after the first index because it initially returns 6 items (current day + next 5 days), but here we only want the next 5 days

      console.log(weatherInfo);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const clickHandler = (id) => {
    fetchWeather(id);
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <h1>MetaWeather</h1>
      <Card>
        <FlexContainer>
          {cities.map((city) => (
            <Button onClick={() => clickHandler(city.woeid)} key={city.woeid}>
              {city.name}
            </Button>
          ))}
        </FlexContainer>
        <FlexContainer>
          {weatherInfo.map((weather) => (
            <ForecastItem
              key={Math.random()}
              day={weather.applicable_date}
              icon={weather.weather_state_abbr}
              temp={weather.the_temp}
              min={weather.min_temp}
              max={weather.max_temp}
              speed={weather.wind_speed}
              direction={weather.wind_direction_compass}
            />
          ))}
        </FlexContainer>
      </Card>
    </React.Fragment>
  );
}

export default App;
