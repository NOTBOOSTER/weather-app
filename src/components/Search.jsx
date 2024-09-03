import { IoMdSearch } from "react-icons/io";

const Search = ({getWeather, fetchData, setLocation}) => {
  return (
    <div className=" flex justify-center">
      <input onChange={(e)=>{setLocation(e.target.value)}} type="search" placeholder="Enter Location" className="focus:outline-none shadow-inner shadow-gray-600 focus:shadow-gray-900 h-12 md:w-96 w-56 rounded-lg px-5 placeholder-gray-500"></input>
      <button onClick={()=>{fetchData(); getWeather()}} className="ml-2 bg-white px-4 rounded-lg shadow-inner shadow-gray-600 hover:shadow-gray-800"><IoMdSearch size="20" color="#343333"/></button>
    </div>
  );
};

export default Search;
