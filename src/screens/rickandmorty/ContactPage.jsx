import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactPage() {
  const { id } = useParams();
  const [characterDetail, setCharacterDetail] = useState([]);
  const [showEpisode, setShowEpisode] = useState(false);
  const [episodeNumbers, setEpisodeNumbers] = useState([]);
  
  const [nextChar, setNextChar] = useState(Number(id))

  const getCharacter = async () => {
    try {
      const resultado = await axios(
        `https://rickandmortyapi.com/api/character/${nextChar}`
      );
      setCharacterDetail(resultado.data);
      const numbers = resultado.data.episode?.map((epi) => {
        const matches = epi.match(/\/(\d+)$/);
        return matches ? matches[1] : null;
      });
      setEpisodeNumbers(numbers);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };
  useEffect(() => {
    getCharacter();
  }, [nextChar]);

  const handleId = (fun) => {
    setNextChar(fun);
  };
  return (
    <>
    <div className="rickandmorty-btns">
      <button disabled={nextChar < 1} onClick={() => handleId(1)}>Beggining</button>
      <button disabled={nextChar < 1} onClick={() => handleId(nextChar - 1)}>Previous</button>
      <button onClick={()=>handleId(nextChar + 1)}>Next</button>
    </div>
    <div className="rickandmorty-contactPage">
      <h2>{characterDetail.name}</h2>
      <div className="rickandmorty-contactPage-info">
        <img className="rickandmorty-contactPage-img" src={characterDetail.image} alt={characterDetail.id}/>
        <div className="rickandmorty-contactPage-info-texts">
          <div><span className="rickandmorty-contactPage-info-texts-span">Species:</span> {characterDetail.species}</div>
          <div><span className="rickandmorty-contactPage-info-texts-span">Gender:</span> {characterDetail.gender}</div>
          <div><span className="rickandmorty-contactPage-info-texts-span">Originally from:</span> {characterDetail.origin?.name}</div>
          <div><span className="rickandmorty-contactPage-info-texts-span">Found on:</span> {characterDetail.location?.name}</div>
          <div><span className="rickandmorty-contactPage-info-texts-span">Status:</span> {characterDetail.status}</div>
        </div>
      </div>
      {!showEpisode ? (
        <button className="rickandmorty-contactPage-btnEpisode" onClick={() => setShowEpisode(!showEpisode)}>
          Episodios<i className="fa-solid fa-chevron-down"></i>
        </button>
      ) : (
        <button className="rickandmorty-contactPage-btnEpisode" onClick={() => setShowEpisode(!showEpisode)}>
          Episodios<i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
      {showEpisode && (
        <div className="rickandmorty-contactPage-episodes">
          {episodeNumbers.map((number, index) => (
            <span key={index}>Episodio: {number}</span>
          ))}
        </div>
      )}
    </div>
    </>
  );

}

export default ContactPage;
