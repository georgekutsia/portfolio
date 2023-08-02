import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactPage() {
  const [characterDetail, setCharacterDetail] = useState([]);
  

  const { id } = useParams();
  const getCharacter = async () => {
    const resultado = await axios(`https://rickandmortyapi.com/api/character/${id}`);
    setCharacterDetail(resultado.data)
    console.log(resultado.data)
  };
  useEffect(()=>{
    getCharacter()
  },[])

  return (
    <div className="rickandmorty-contactPage">
      <h2>{characterDetail.name}</h2>
      <img  className="rickandmorty-contactPage-img" src={characterDetail.image} alt="" />
    </div>
  );
}

export default ContactPage;
