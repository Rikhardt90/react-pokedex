import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../styles/Gallery.scss"
import Pagination from "../../components/Pagination/Pagination";
import Characters from "../../components/Characters/Characters";

const Gallery = () => {

  const [characters, setCharacters] = useState([]);
  const URL = "https://rickandmortyapi.com/api/character?page=";

  const getCharacters = async (newPage = 1) => {
    const res = await axios(URL + newPage)
    setCharacters(res.data.results);
}

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <div className="gallery">
      <Characters characters={characters} />
      <Pagination getData={getCharacters} />
    </div>
  );
};

export default Gallery;
