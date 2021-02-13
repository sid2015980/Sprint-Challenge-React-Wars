import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((response) => {
        setData(response.data.results);
        setFiltered(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //the [] allows the data to mount once and never again, instead of constantly loading

  useEffect(() => {
    const results = filtered.filter((res) =>
      res.name.toLowerCase().includes(result) ||
      res.birth_year.toLowerCase().includes(result) ||
      res.gender.toLowerCase().includes(result)

    );
    setData(results);
  }, [result]);

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="Header">⭐️⭐️⭐️⭐️⭐️React Wars⭐️⭐️⭐️⭐️⭐️</h1>
      {/* SEARCH BAR NOT FUNCTIONAL */}
      <form>
        <label className="search" htmlFor="name">
          Search:
        </label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="serch here .."
          value={result}
          onChange={onChange}
        />
      </form>
      {data.map((CharData, i) => {
        console.log(CharData);
        return (
          <Character
            key={i}
            name={CharData.name}
            height={CharData.height}
            mass={CharData.mass}
            birthyear={CharData.birth_year}
            gender={CharData.gender}
            homeworld={CharData.homeworld}
          />
        );
      })}
    </div>
  );
}

export default App;
