import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data)
    })
    .catch(err => console.error(err))
  }, []);
  return (
    <main className="bg-[#fafafa] min-h-[100vh] dark:bg-dark-blue dark:text-white">
      <NavBar />
      <section className="px-4 lg:px-24 mt-12 ">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <SearchBar />
          <Filters />
        </div>
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-16">
       {countries.map(country => (
        <div key={country.cca2} className="rounded-sm shadow-md overflow-hidden">
          <img src={country.flags.png} alt={country.name.common} className="h-44 w-full" />
          <div className="p-4 bg-white dark:bg-dark-blue dark:text-white">
          <h1 className="font-bold text-lg mb-4">{country.name.common}</h1>
          <p className="mb-2"><span className="font-medium ">Population:</span> {country.population}</p>
          <p className="mb-2"><span className="font-medium">Region :</span> {country.region}</p>
          <p className="mb-2"><span className="font-medium">Capital :</span> {country.capital}</p>
          </div>
        </div>
       ))}
       </section>
      </section>
    </main>
  );
};

export default App;
