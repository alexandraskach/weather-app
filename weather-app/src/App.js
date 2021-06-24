import React, { useState } from "react";
const api = {
  key: "98b7465353d383f3d0f3bc4a284a48ae",

  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 15
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <section className="content">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Rechercher"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="result">
                {typeof weather.main != "undefined"
                  ? weather.main.temp > 15
                    ? "Il fait chaud"
                    : "Il fait froid"
                  : " "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default App;
