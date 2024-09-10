import Search from "./components/Search";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_KEY = "9105cfa2fc93f981deda3f3d1db8d163";

  
  const setlastLocation = (Location) => {
    localStorage.setItem("lastLocation", Location);
  }

  const getLastLocation = () => {
    return localStorage.getItem("lastLocation") || "Delhi";
  }

  const [Location, setLocation] = useState(getLastLocation);
  const [forecastData, setForecast] = useState([]);



  const [weatherData, setWeather] = useState({});

  useEffect(() => {
    getWeather();
    fetchData();
  }, []);

  // get weather api data

  const getWeather = async () => {
    setlastLocation(Location);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
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
  };

  return (
    <div className=" flex items-center justify-center bg-bgimg sm:h-screen sm:w-screen bg-no-repeat bg-cover flex-col bg-center bg-fixed">
      {weatherData && weatherData.main ? (
        <div className="max-w-1/2 h-fit py-12 rounded-xl backdrop-blur bg-[#ffffff76]">
          <Search
            getWeather={getWeather}
            setLocation={setLocation}
            fetchData={fetchData}
          />
          <Weather weatherData={weatherData} forecastData={forecastData} />
        </div>
      ) : (
        <span>loading</span>
      )}

      <footer className="font-bold mt-14">
        Made By{" "}
        <a
          className="text-red-500"
          href="https://github.com/NOTBOOSTER/weather-app"
        >
          Bhaskar Melkani
        </a>
      </footer>
    </div>
  );
}

export default App;
