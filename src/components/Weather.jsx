import Forecast from "./Forecast";

const Weather = ({weatherData, forecastData}) => {
    const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    return (
        <div className="flex flex-col items-center md:mx-24 mt-10 rounded-xl shadow-inner shadow-gray-600 bg-white">
            <div className="flex items-center justify-between w-full px-16 pt-5 ">
                <div className="text-gray-700 text-7xl font-bold ">{Math.floor(weatherData.main.temp)}°C</div>
                <div><img className="w-32" src={icon}></img></div>
            </div>
            <div className="flex items-center justify-between w-full px-16 py-5 md:gap-32">
                <div className="text-gray-700 font-bold ">
                    <h1 className="text-2xl">{weatherData.name} {weatherData.sys.country}</h1>
                    <h1 className="text-xl">{weatherData.weather[0].description}</h1>
                </div>
                <div className="text-gray-700">
                    <h1 className="text-sm font-bold">Humidity: {weatherData.main.humidity}%</h1>
                    <h1 className="text-sm font-bold">Wind Speed: {weatherData.wind.speed} km/h</h1>
                    <h1 className="text-sm font-bold">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</h1>
                    <h1 className="text-sm font-bold">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</h1>
                </div>
            </div>
            <Forecast forecastData={forecastData} />
        </div>  
    )
};

export default Weather;