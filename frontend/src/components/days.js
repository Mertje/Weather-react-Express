export default function Days(props) {
  const { weather, days } = props;
  let { multiDays } = props;

  function checkDay() {
    if (multiDays === 7) {
      multiDays = 0;
    }
    return days[multiDays++];
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
      {weather.forecast.forecastday.map((day) => (
        <div className="rounded-xl  mx-1 mb-5" key={day.date}>
          <div className="block bg-blue-500 rounded-t-lg border-2">
            <p className="pt-3 text-white text-2xl w-100 text-center font-semibold">
              {checkDay()}
            </p>
            <p className="text-white text-xs w-100 text-center">{day.date}</p>
            <div className="flex leading-3 py-3">
              <img
                className=""
                src={day.day.condition.icon}
                alt={day.day.condition.text}
              />
              <div className="block pt-5">
                <p className="text-white flex items-center font-bold">
                  {"Avarage temparature: " + day.day.avgtemp_c + "°"}
                </p>
                <span className="text-slate-50 text-xs">
                  {day.day.condition.text}
                </span>
              </div>
            </div>
          </div>

          <div className="flex border-solid border-b-2 border-x-2">
            <p className="flex-none items-center font-bold ml-4">Time</p>
            <p className="flex-none mx-auto text-center font-bold">Degrees</p>
            <p className="flex-none flex items-center font-bold ml-auto mr-4">
              Wind
            </p>
          </div>

          <div>
            {day.hour.map((hours) => (
              <div
                className="flex text-center border-solid border-b-2 border-x-2 "
                key={hours.time}
              >
                <p className="flex-none flex items-center font-bold ml-4">
                  {hours.time.substr(hours.time.length - 5)}
                </p>
                <img
                  className="flex-none ml-16 text-center"
                  src={hours.condition.icon}
                  alt="Weatherspecial"
                />
                <p className="flex-none flex items-center font-bold">
                  {hours.temp_c}°C{" "}
                </p>
                <p className="flex-none flex items-center font-bold ml-auto mr-4">
                  {hours.wind_dir + " " + hours.wind_kph + " KPH"}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
