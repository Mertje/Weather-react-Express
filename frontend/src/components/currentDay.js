export default function CurrentDay(props) {
  let { multiDays } = props;
  const { weather, days } = props;

  return (
    <div className="grid bg-blue-500 text-white rounded-lg border-2 mx-1 my-2 grid-cols-2">
      <div className="ml-2 pb-5">
        <p data-cy="input-location" className="text-2xl font-semibold">
          {weather.location.region}{" "}
        </p>
        <p className=" text-lg leading-4">{weather.location.country}</p>
        <p className="text-sm leading-6">{days[multiDays]}</p>
      </div>
      <div className="flex items-center justify-center mr-2 ml-auto pb-5">
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <p className="leading-5 flex-none flex items-center">
          {weather.current.temp_c + "℃"}
          <br /> {weather.current.condition.text}
        </p>
      </div>
      <p className="text-xs mt-auto mb-2 ml-2">
        Last updated: {weather.current.last_updated}
      </p>
      <div className="block items-center justify-center mr-2 ml-auto">
        <p className="mb-2 text-xs">
          Feels like: {weather.current.feelslike_c + "℃"}
          <br />
          Wind from: {weather.current.wind_dir +
            " " +
            weather.current.wind_kph}{" "}
          Kph
        </p>
      </div>
    </div>
  );
}
