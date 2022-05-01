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
  const fullDate = new Date(props.day); //transform date string that comes from API into a javascript date object
  const day = fullDate.getDay(); //this method will return the day of the week in a number format (sunday is 0, monday is 1, etc..)

  const iconUrl = `https://www.metaweather.com/static/img/weather/${props.icon}.svg`;

  return (
    <Forecast>
      <h2>{weekdays[day]}</h2>
      <img src={iconUrl} alt={props.iconAlt} />
      <h3>{props.temp.toFixed(2)} ºC</h3>
      <div>
        <p>Min: {props.min.toFixed(0)}º</p>
        <p>Max: {props.max.toFixed(0)}º</p>
      </div>
      <div>
        <h4>Wind</h4>
        <p>Speed: {props.speed.toFixed(0)}</p>
        <p>Direction: {props.direction}</p>
      </div>
    </Forecast>
  );
};

export default ForecastItem;
