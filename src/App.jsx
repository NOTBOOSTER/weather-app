import Search from "./components/Search";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_KEY = "9105cfa2fc93f981deda3f3d1db8d163";
  const [Location, setLocation] = useState("haldwani");
  const [forecastData, setForecast] = useState([]);

// dummy api response

  const [weatherData, setWeather] = useState({
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "Clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 20,
      feels_like: 20,
      temp_min: 20,
      temp_max: 20,
      pressure: 1013,
      humidity: 50,
      sea_level: 1013,
      grnd_level: 1013,
    },
    visibility: 10000,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 1699132800,
    sys: {
      type: 1,
      id: 0,
      country: "XX",
      sunrise: 1699118000,
      sunset: 1699148800,
    },
    timezone: 0,
    id: 0,
    name: "Dummy City",
    cod: 200,
  });

// get weather api data

  const getWeather = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        console.log(response);
        setWeather(response.data);
      })
      .catch((error) => console.log(error));
  };

  

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${Location}&appid=${API_KEY}&units=metric&cnt=42`
      );
      setForecast(Data(response.data.list));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

  };

  const Data = (apidata) => {
    return apidata.filter((item) => item.dt_txt.includes("12:00:00"));
  }

  return (
    <div className=" flex items-center justify-center bg-bgimg w-screen h-screen bg-no-repeat bg-cover">
      <div className="max-w-1/2 h-fit py-12 rounded-xl backdrop-blur bg-[#ffffff76]">
        <Search
          getWeather={getWeather}
          setLocation={setLocation}
          fetchData={fetchData}
        />
        <Weather
          weatherData={weatherData}
          forecastData={forecastData}
        />
      </div>
    </div>
  );
}

export default App;
