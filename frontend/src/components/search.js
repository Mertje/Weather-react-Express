import WeatherInt from "./weatherInt";
import { useEffect, useState } from "react";
import Weather from "../api/weather";

export default function Search() {
  // Default City Amsterdam.
  const [city, setCity] = useState("ams");
  const [weatherData, setWeatherData] = useState();

  //api call then set weatherdata
  useEffect(() => {
    Weather(city).then((apidata) => setWeatherData(apidata.data));
  }, [city]);

  return (
    <>
      <div className="bg-sky">
        <div className="text-center py-10">
          <p className="block py-1 text-3xl font-semibold mb-2">Enter a city:</p>
          {/* Checks for input. only api call if char is 3+. Clears when empty */}
          <input
            data-cy="main-input"
            type="text"
            className="w-8/12 h-14 md:w-3/12 rounded-full w-auto h-11 px-5 border-black border-2"
            onChange={(e) =>
              e.target.value.length > 2
                ? setCity(e.target.value)
                : weatherData && e.target.value.length < 3
                ? setWeatherData("")
                : ""
            }
            placeholder="Amsterdam"
          />
        </div>
      </div>
      {weatherData ? (
        <WeatherInt weather={weatherData} />
      ) : (
        <div className="text-center">
          <small className="text-red-600">No city found</small>
        </div>
      )}
    </>
  );
}
