import React, { useState } from "react";
import useHttp from "./hooks/use-http";

import cities from "./data/cities";

import GlobalStyles from "./components/styles/Global";
import { Card } from "./components/styles/Card.styled";
import { Button } from "./components/styles/Button.styled";
import { FlexContainer } from "./components/styles/FlexContainer.styled";
import ForecastItem from "./components/ForecastItem/ForecastItem";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const { isLoading, error, sendRequest: fetchForecast } = useHttp();

  const clickHandler = async (woeid) => {
    const url = `https://www.metaweather.com/api/location/${woeid}`;
    fetchForecast(url, setWeatherInfo);
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
          {isLoading && <strong>Loading...</strong>}
          {error && <strong>Something went wrong!</strong>}
          {weatherInfo && !isLoading ? (
            weatherInfo.map((weather) => (
              <ForecastItem
                key={Math.random()} // NEED TO CHANGE THIS - PLACEHOLDER ONLY
                day={weather.applicable_date}
                icon={weather.weather_state_abbr}
                temp={weather.the_temp}
                min={weather.min_temp}
                max={weather.max_temp}
                speed={weather.wind_speed}
                direction={weather.wind_direction_compass}
              />
            ))
          ) : (
            <strong>Choose a city!</strong>
          )}
        </FlexContainer>
      </Card>
    </React.Fragment>
  );
}

export default App;
