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
  const [activeCityButton, setActiveCityButton] = useState(null);

  const { isLoading, error, sendRequest: fetchForecast } = useHttp();

  const clickHandler = async (woeid) => {
    setActiveCityButton(woeid);

    const url = `https://www.metaweather.com/api/location/${woeid}`;
    fetchForecast(url, setWeatherInfo);
  };

  let content = "";

  if (!weatherInfo && !isLoading) {
    content = <strong>Choose your city!</strong>;
  } else if (isLoading) {
    content = <strong>Loading...</strong>;
  } else if (error) {
    content = <strong>Something went wrong!</strong>;
  } else if (weatherInfo && !isLoading) {
    content = weatherInfo.map((weather) => (
      <ForecastItem
        key={weather.applicable_date}
        day={weather.applicable_date}
        icon={weather.weather_state_abbr}
        temp={weather.the_temp}
        min={weather.min_temp}
        max={weather.max_temp}
        speed={weather.wind_speed}
        direction={weather.wind_direction_compass}
      />
    ));
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <h1>MetaWeather</h1>
      <Card>
        <FlexContainer>
          {cities.map((city) => (
            <Button
              onClick={() => clickHandler(city.woeid)}
              key={city.woeid}
              bg={activeCityButton === city.woeid ? "#e25b88cc" : null}
            >
              {city.name}
            </Button>
          ))}
        </FlexContainer>
        <FlexContainer>{content}</FlexContainer>
      </Card>
    </React.Fragment>
  );
}

export default App;
