import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../App';
import { set } from 'react-hook-form';

function RickAndMortyGaleria({data}) {
  const {favorites, setFavorites} = useContext(GlobalContext)
  const [search, setSearch] = useState("")

  const handleFavorites = (newFavorite)=>{
    setFavorites([...favorites, newFavorite])
    console.log(favorites)
  }
  return (
    <>

    <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)}/>
    <div className="rickandmorty-center-gallery">
      {data
        .filter((char) =>char.name.toLowerCase().includes(search.toLowerCase()))
          .map((char) => (
            <div key={char.id}>
              <h3> <span style={{color:"blue"}}> {char.name}</span> and is {char.status}</h3>
            <div>
            <button onClick={()=>handleFavorites(char)}>Add Favorite</button>
            </div>
              <Link to={`/rickandmorty/characters-page/${char.id}`}>
                <img href={`/rickandmorty/characters-page/${char.id}`} src={char.image} alt={char.name}/>
              </Link>
            </div>
      ))}
    </div>
    </>
  );
}

export default RickAndMortyGaleria