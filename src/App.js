import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <CountryList
        countries={countries}
        newFilter={newFilter}
      />
    </div>
  );
};
export default App;