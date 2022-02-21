import React from "react";
import "./Home.scss";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  return(
    <div className="home"></div>
  );
  // let [tiempo, setTiempo] = useState("-");
  // let [localidad, setLocalidad] = useState("-");
  // let [condition, setCondition] = useState("eneko president");

  // const getData = () => {
  //   const apiKey = "removed";
  //   const lon = -3.70379;
  //   const lat = 40.416775;
  //   const BASEURL = "https://api.openweathermap.org/data/2.5/weather";
  //   const URL = "?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

  //   axios(BASEURL + URL).then((res) => {
  //     const weatherData = res.data;
  //     console.log(weatherData);
  //     const tiempo = weatherData.main.temp;
  //     const localidad = weatherData.name;
  //     const condition = weatherData.weather[0].description;
  //     updateData(tiempo, localidad, condition);
  //   });
  // };

  // const updateData = (tiempo, localidad, condition) => {

  //   setTiempo(tiempo);
  //   setLocalidad(localidad);
  //   setCondition(condition);

  // };

  // return (
  //   <div className="div-principal">
  //     <div className="container">
  //       <h3>
  //         {tiempo} en {localidad}, with {condition}
  //       </h3>
  //       <button className="btn" onClick={() => getData()}>
  //         Actualizar
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Home;
