import React from 'react'

function RickAndMortyGaleria({data}) {
  return (
    <div className="rickandmorty-center-gallery">
      {data.map((char) => (
        <div>
          <h3>{char.name} and is {char.status}</h3>
          <img src={char.image} alt={char.name} />
        </div>
      ))}
    </div>
  );
}

export default RickAndMortyGaleria