import React, { useEffect, useState } from "react";
import axios from "axios";
import RickAndMortyGaleria from "./RickAndMortyGaleria";

function RickAndMortyAllCharacters() {
  const [allChars, setAllChars] = useState([]);
  const [allPages, setAllPages] = useState()
  const getAllChars = async () => {
    try {
      let allCharacters = [];
      const amountOfPages = await axios(
        `https://rickandmortyapi.com/api/character`
      );
      setAllPages(amountOfPages.data.info.pages);
      console.log(allPages)
      for (let i = 1; i <= allPages; i++) {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${i}`
        );
        allCharacters = [...allCharacters, ...data.results];
      }
      setAllChars(allCharacters)
      console.log(allChars)
    } catch (error) {
      console.error("Error al obtener los ppersonajes:", error);
    }
  };
  useEffect(() => {
    getAllChars();
  }, [allPages]);
  return (
    <div>
      <RickAndMortyGaleria data={allChars} />
    </div>
  );
}

export default RickAndMortyAllCharacters;
