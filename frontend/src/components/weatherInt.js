import Days from "./days";
import CurrentDay from "./currentDay";

export default function WeatherInt(props) {
  let multiDays = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="container mx-auto">
      <CurrentDay weather={props.weather} multiDays={multiDays} days={days} />
      <Days weather={props.weather} multiDays={multiDays} days={days} />
    </div>
  );
}