import React from 'react'
import { Link } from 'react-router-dom';

function RickAndMortyGaleria({data}) {
  return (
    <div className="rickandmorty-center-gallery">
      {data.map((char) => (
        <div key={char.id}>
          <h3>{char.name} and is {char.status}</h3>
          <Link to={`/rickandmorty/characters-page/${char.id}`} ><img href={`/rickandmorty/characters-page/${char.id}`} src={char.image} alt={char.name} /></Link>
        </div>
      ))}
    </div>
  );
}

export default RickAndMortyGaleria