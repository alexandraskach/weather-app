import React from "react";

function ShowWeather(props) {
  const { data } = props;

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <div>
          <div className="weather-box">
            <div className="temp">{Math.round(data.main.temp)}°c</div>
            <div className="result">
              {typeof data.main != "undefined"
                ? data.main.temp > 15
                  ? "Il fait chaud"
                  : "Il fait froid"
                : " "}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShowWeather;
