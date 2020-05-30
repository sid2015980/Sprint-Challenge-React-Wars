import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people")
      .then((response) => {
        console.log(response.data.results);
        setCard(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //the [] allows the data to mount once and never again, instead of constantly loading

  return (
    <div className="App">
      <h1 className="Header">⭐️⭐️⭐️⭐️⭐️React Wars⭐️⭐️⭐️⭐️⭐️</h1>
      <form>
        <label className="search" htmlFor="name">Search:</label>
        <input id="name" type="text" name="textfield" placeholder="Search" />
      </form>
      {card.map((CharData, index) => {
        console.log(CharData);
        return (
          <Character
            key={index}
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
