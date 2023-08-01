import axios from "axios";
import React, { useEffect, useState } from "react";
import RickAndMortyGaleria from "./RickAndMortyGaleria";
import Pagination from "./componentesRickAndMorty/Pagination";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  async function getCharacters(page) {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  }
    useEffect(() => {
    getCharacters(1);
  }, []);
  return (
    <>
      <div className="rickandmorty-center-gallery">
        <Pagination changePage={getCharacters} />
      </div>
      <div>
        <RickAndMortyGaleria data={characters}/>
      </div>
    </>
  );
}

export default CharactersPage;
