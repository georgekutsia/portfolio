import React, { useContext } from 'react'
import { GlobalContext } from '../../App';
import RickAndMortyGaleria from './RickAndMortyGaleria';

function RickAndMortyFavorites() {
  const { favorites} = useContext(GlobalContext);
  return (
    <div>
        <RickAndMortyGaleria data={favorites}/>
    </div>
  );
}

export default RickAndMortyFavorites