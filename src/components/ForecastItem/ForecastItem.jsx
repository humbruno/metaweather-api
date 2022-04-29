import { Forecast } from "../styles/ForecastItem.styled";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ForecastItem = (props) => {
  const fullDate = new Date(props.day);
  let day = fullDate.getDay();

  const iconUrl = `https://www.metaweather.com/static/img/weather/${props.icon}.svg`;

  return (
    <Forecast>
      <h2>{weekdays[day]}</h2>
      <img src={iconUrl} alt="" aria-hidden="true" />
      <h3>{props.temp.toFixed(2)}º</h3>
      <div>
        <p>Min: {props.min.toFixed(0)}º</p>
        <p>Max: {props.max.toFixed(0)}º</p>
      </div>
      <div>
        <p>Wind speed: {props.speed.toFixed(0)}</p>
        <p>Wind direction: {props.direction}</p>
      </div>
    </Forecast>
  );
};

export default ForecastItem;
