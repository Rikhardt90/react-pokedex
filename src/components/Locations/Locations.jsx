import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Locations.scss"

export default function Locations() {
    const [locations, setLocations] = useState([]);
    const URL = "https://rickandmortyapi.com/api/location";
    const locationName = locations.name;
  
    useEffect(() => {
      axios(URL).then((res) => {
        setLocations(res.data.results);
      });
    }, []);
  
    console.log(locations);
  
    return (
      <div>
        {locations
          // .filter((character) => character.name.toLowerCase().includes("r"))
          .map((location) => {
            return (
              <div key={location.id}>
                <h3>{location.name}</h3>
                <img src="https://images.newscientist.com/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small.jpg" alt={location.name} />
                <h2></h2>
              </div>
            );
          })}
      </div>
    );
}
