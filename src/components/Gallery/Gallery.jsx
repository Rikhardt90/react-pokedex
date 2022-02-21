import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Gallery.scss";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const URL = "https://rickandmortyapi.com/api/character";
  const characterName = characters.name;

  useEffect(() => {
    axios(URL).then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  console.log(characters);

  return (
    <div>
      {characters
        // .filter((character) => character.name.toLowerCase().includes("r"))
        .map((character) => {
          return (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
              <h2></h2>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
